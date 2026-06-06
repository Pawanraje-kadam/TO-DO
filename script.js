const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function init() { renderTasks(); updateCounter(); }

function saveTasks() { localStorage.setItem('tasks', JSON.stringify(tasks)); updateCounter(); }

function updateCounter() {
  const pendingTasks = tasks.filter(task => !task.completed).length;
  taskCounter.textContent = `${pendingTasks} task${pendingTasks !== 1 ? 's' : ''} pending`;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return; 
  const newTask = { id: Date.now().toString(), text: text, completed: false };
  tasks.unshift(newTask);
  saveTasks(); renderTasks(); taskInput.value = '';
}

function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) return { ...task, completed: !task.completed };
    return task;
  });
  saveTasks(); renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks(); renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    
    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    
    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });

init();