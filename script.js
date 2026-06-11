/* ==========================================
   GLASS TASKS — JavaScript (app.js)
   ========================================== */

(function () {
  'use strict';

  /* ── State ──────────────────────────── */

  let tasks = [];
  let currentFilter = 'all';

  /* ── DOM References ─────────────────── */

  const taskInput      = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const dueDateInput   = document.getElementById('dueDateInput');
  const addBtn         = document.getElementById('addBtn');
  const taskList       = document.getElementById('taskList');
  const emptyState     = document.getElementById('emptyState');
  const totalCount     = document.getElementById('totalCount');
  const doneCount      = document.getElementById('doneCount');
  const progressBar    = document.getElementById('progressBar');
  const progressLabel  = document.getElementById('progressLabel');
  const currentDate    = document.getElementById('currentDate');
  const clearBtn       = document.getElementById('clearBtn');
  const tabs           = document.querySelectorAll('.tab[data-filter]');

  /* ── Init ───────────────────────────── */

  function init() {
    loadTasks();
    renderDate();
    renderAll();
    bindEvents();
  }

  /* ── Date Display ───────────────────── */

  function renderDate() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    currentDate.textContent = now.toLocaleDateString('en-US', options);
  }

  /* ── localStorage ───────────────────── */

  function loadTasks() {
    try {
      const saved = localStorage.getItem('glassTasks');
      tasks = saved ? JSON.parse(saved) : [];
    } catch {
      tasks = [];
    }
  }

  function saveTasks() {
    localStorage.setItem('glassTasks', JSON.stringify(tasks));
  }

  /* ── Add Task ───────────────────────── */

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
      taskInput.style.animation = 'none';
      taskInput.offsetHeight; // reflow
      taskInput.focus();
      shakeInput();
      return;
    }
const task = {
  id: Date.now(),
  text,
  priority: prioritySelect.value,
  completed: false,
  createdAt: new Date().toISOString(),
  dueDate: dueDateInput.value || null
};
    

    tasks.unshift(task);
    saveTasks();
    renderAll();
    taskInput.value = '';
    taskInput.focus();
  }

  function shakeInput() {
    const wrap = taskInput.closest('.input-wrap');
    wrap.style.transform = 'translateX(-6px)';
    setTimeout(() => { wrap.style.transform = 'translateX(6px)'; }, 80);
    setTimeout(() => { wrap.style.transform = 'translateX(-4px)'; }, 160);
    setTimeout(() => { wrap.style.transform = 'translateX(0)'; }, 240);
    wrap.style.borderColor = 'rgba(248,113,113,0.6)';
    wrap.style.boxShadow = '0 0 0 3px rgba(248,113,113,0.2)';
    setTimeout(() => {
      wrap.style.borderColor = '';
      wrap.style.boxShadow = '';
    }, 700);
  }

  /* ── Toggle Complete ────────────────── */

  function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      saveTasks();
      renderAll();
    }
  }

  /* ── Delete Task ────────────────────── */

  function deleteTask(id) {
    const itemEl = taskList.querySelector(`[data-id="${id}"]`);
    if (itemEl) {
      itemEl.classList.add('removing');
      setTimeout(() => {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderAll();
      }, 300);
    }
  }

  /* ── Clear Completed ────────────────── */

  function clearCompleted() {
    const toRemove = tasks.filter(t => t.completed);
    if (!toRemove.length) return;

    toRemove.forEach(task => {
      const el = taskList.querySelector(`[data-id="${task.id}"]`);
      if (el) el.classList.add('removing');
    });

    setTimeout(() => {
      tasks = tasks.filter(t => !t.completed);
      saveTasks();
      renderAll();
    }, 300);
  }

  /* ── Filter Logic ───────────────────── */

  function getFilteredTasks() {
    switch (currentFilter) {
      case 'active':    return tasks.filter(t => !t.completed);
      case 'completed': return tasks.filter(t =>  t.completed);
      default:          return tasks;
    }
  }

  /* ── Render ─────────────────────────── */

  function renderAll() {
    renderStats();
    renderTasks();
    renderEmptyState();
  }

  function renderStats() {
    const total = tasks.length;
    const done  = tasks.filter(t => t.completed).length;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

    totalCount.textContent   = total;
    doneCount.textContent    = done;
    progressBar.style.width  = pct + '%';
    progressLabel.textContent = pct + '% complete';
  }

  function renderTasks() {
    const filtered = getFilteredTasks();

    // Remove items no longer in filter, add new ones
    const existingIds = new Set(
      Array.from(taskList.querySelectorAll('.task-item')).map(el => Number(el.dataset.id))
    );
    const filteredIds = new Set(filtered.map(t => t.id));

    // Remove stale items
    existingIds.forEach(id => {
      if (!filteredIds.has(id)) {
        const el = taskList.querySelector(`[data-id="${id}"]`);
        if (el) taskList.removeChild(el);
      }
    });

    // Insert / update items in order
    filtered.forEach((task, index) => {
      let el = taskList.querySelector(`[data-id="${task.id}"]`);
      if (!el) {
        el = createTaskElement(task);
        taskList.insertBefore(el, taskList.children[index] || null);
      } else {
        updateTaskElement(el, task);
        // Reorder if needed
        if (taskList.children[index] !== el) {
          taskList.insertBefore(el, taskList.children[index] || null);
        }
      }
    });
  }

  function createTaskElement(task) {
    const el = document.createElement('div');
    el.className = 'task-item' + (task.completed ? ' completed' : '');
    el.dataset.id = task.id;
    el.dataset.priority = task.priority;
    el.innerHTML = taskHTML(task);
    bindTaskEvents(el, task);
    return el;
  }

  function updateTaskElement(el, task) {
    el.className = 'task-item' + (task.completed ? ' completed' : '');
    el.dataset.priority = task.priority;
    el.innerHTML = taskHTML(task);
    bindTaskEvents(el, task);
  }

  function taskHTML(task) {
    const checkmark = task.completed ? '✓' : '';
    const badgeClass = `badge-${task.priority}`;
    const priorityLabel = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    return `
      <div class="task-checkbox" role="button" aria-label="Toggle complete" tabindex="0">${checkmark}</div>
      <span class="task-text">${escapeHTML(task.text)}</span>
      <span class="priority-badge ${badgeClass}">${priorityLabel}</span>
      <button class="delete-btn" aria-label="Delete task" title="Delete">✕</button>
    `;
  }

  function bindTaskEvents(el, task) {
    const checkbox = el.querySelector('.task-checkbox');
    const deleteBtn = el.querySelector('.delete-btn');

    checkbox.addEventListener('click', () => toggleTask(task.id));
    checkbox.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') toggleTask(task.id);
    });
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
  }

  function renderEmptyState() {
    const filtered = getFilteredTasks();
    if (filtered.length === 0) {
      emptyState.classList.add('visible');
    } else {
      emptyState.classList.remove('visible');
    }
  }

  /* ── Utility ────────────────────────── */

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ── Events ─────────────────────────── */

  function bindEvents() {
    // Add task
    addBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') addTask();
    });

    // Filter tabs
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderAll();
      });
    });

    // Clear completed
    clearBtn.addEventListener('click', clearCompleted);
  }

  /* ── Start ──────────────────────────── */
  init();

})();
