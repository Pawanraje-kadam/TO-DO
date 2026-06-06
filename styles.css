/* ==========================================
   GLASS TASKS — CSS (Glassmorphism To-Do)
   ========================================== */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-hover: rgba(255, 255, 255, 0.13);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-border-strong: rgba(255, 255, 255, 0.30);
  --blur: blur(18px);
  --blur-sm: blur(10px);

  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.55);
  --text-muted: rgba(255, 255, 255, 0.35);

  --accent: #a78bfa;
  --accent-glow: rgba(167, 139, 250, 0.35);
  --accent-done: #34d399;
  --accent-done-glow: rgba(52, 211, 153, 0.30);
  --accent-danger: #f87171;

  --priority-low: #34d399;
  --priority-medium: #fbbf24;
  --priority-high: #f87171;

  --radius: 18px;
  --radius-sm: 10px;
  --radius-pill: 999px;

  --shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  --shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.20);

  --font-main: 'Outfit', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Body & Background ─────────────────── */

body {
  font-family: var(--font-main);
  background: #0d0221;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem 4rem;
  overflow-x: hidden;
  color: var(--text-primary);
}

/* ── Animated Background Orbs ──────────── */

.bg-orbs {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.45;
}

.orb-1 {
  width: 520px; height: 520px;
  background: radial-gradient(circle, #7c3aed, transparent 70%);
  top: -140px; left: -100px;
  animation: drift1 14s ease-in-out infinite alternate;
}

.orb-2 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, #0ea5e9, transparent 70%);
  top: 30%; right: -120px;
  animation: drift2 18s ease-in-out infinite alternate;
}

.orb-3 {
  width: 380px; height: 380px;
  background: radial-gradient(circle, #ec4899, transparent 70%);
  bottom: 0; left: 20%;
  animation: drift3 16s ease-in-out infinite alternate;
}

.orb-4 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #10b981, transparent 70%);
  top: 60%; left: -80px;
  animation: drift1 20s ease-in-out infinite alternate-reverse;
}

@keyframes drift1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(60px, 40px) scale(1.08); }
}
@keyframes drift2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-50px, 60px) scale(1.1); }
}
@keyframes drift3 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, -50px) scale(1.06); }
}

/* ── Main Container ────────────────────── */

.container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 1rem;
}

/* ── Glass Base ────────────────────────── */

.glass-header,
.glass-input-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* ── Header ────────────────────────────── */

.glass-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  gap: 1rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

.app-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.app-date {
  font-size: 12px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  margin-top: 2px;
}

.header-stats {
  display: flex;
  gap: 8px;
}

.stat-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 6px 14px;
  min-width: 52px;
}

.done-pill {
  border-color: rgba(52, 211, 153, 0.30);
  background: rgba(52, 211, 153, 0.07);
}

.stat-num {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-mono);
  line-height: 1;
}

.done-pill .stat-num {
  color: var(--accent-done);
}

.stat-label {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 2px;
}

/* ── Progress Bar ──────────────────────── */

.progress-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 4px;
}

.progress-track {
  flex: 1;
  height: 5px;
  background: rgba(255,255,255,0.1);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #7c3aed, #34d399);
  border-radius: var(--radius-pill);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
}

.progress-label {
  font-size: 11px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  white-space: nowrap;
  min-width: 80px;
  text-align: right;
}

/* ── Input Area ────────────────────────── */

.glass-input-card {
  padding: 1rem 1.25rem;
}

.input-row {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.input-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 0 14px;
  min-width: 180px;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.input-wrap:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.input-icon {
  font-size: 20px;
  color: var(--text-muted);
  font-weight: 300;
  line-height: 1;
  flex-shrink: 0;
  transition: color var(--transition);
}

.input-wrap:focus-within .input-icon {
  color: var(--accent);
}

.task-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: 15px;
  font-weight: 400;
  padding: 13px 0;
}

.task-input::placeholder {
  color: var(--text-muted);
}

.priority-select {
  background: rgba(255,255,255,0.07);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: 13px;
  padding: 9px 10px;
  outline: none;
  cursor: pointer;
  transition: border-color var(--transition);
}

.priority-select:hover,
.priority-select:focus {
  border-color: var(--glass-border-strong);
}

.priority-select option {
  background: #1e0a3c;
  color: white;
}

.add-btn {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  border: none;
  border-radius: var(--radius-sm);
  color: white;
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 600;
  padding: 11px 22px;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.40);
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.add-btn:hover {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.55);
}

.add-btn:active {
  transform: translateY(0) scale(0.98);
}

/* ── Filter Tabs ───────────────────────── */

.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tab {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border-radius: var(--radius-pill);
  color: var(--text-secondary);
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 500;
  padding: 7px 18px;
  cursor: pointer;
  transition: all var(--transition);
}

.tab:hover {
  background: var(--glass-bg-hover);
  color: var(--text-primary);
  border-color: var(--glass-border-strong);
}

.tab.active {
  background: linear-gradient(135deg, rgba(124,58,237,0.35), rgba(14,165,233,0.20));
  border-color: rgba(167, 139, 250, 0.50);
  color: var(--accent);
  box-shadow: 0 0 12px rgba(167,139,250,0.20);
}

.danger-tab {
  margin-left: auto;
  color: rgba(248, 113, 113, 0.7);
  border-color: rgba(248, 113, 113, 0.20);
}

.danger-tab:hover {
  background: rgba(248, 113, 113, 0.12);
  color: var(--accent-danger);
  border-color: rgba(248, 113, 113, 0.40);
}

/* ── Task List ─────────────────────────── */

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── Task Item ─────────────────────────── */

.task-item {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  animation: slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  position: relative;
  overflow: hidden;
}

.task-item::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  border-radius: 3px 0 0 3px;
  transition: background var(--transition);
}

.task-item[data-priority="low"]::before    { background: var(--priority-low); }
.task-item[data-priority="medium"]::before { background: var(--priority-medium); }
.task-item[data-priority="high"]::before   { background: var(--priority-high); }

.task-item:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-strong);
  transform: translateY(-1px);
  box-shadow: var(--shadow);
}

.task-item.completed {
  opacity: 0.55;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: var(--text-muted);
}

.task-item.removing {
  animation: slideOut 0.30s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes slideOut {
  from { opacity: 1; transform: translateX(0) scale(1); max-height: 80px; margin-bottom: 10px; }
  to   { opacity: 0; transform: translateX(30px) scale(0.95); max-height: 0; margin-bottom: 0; padding: 0; }
}

/* ── Checkbox ──────────────────────────── */

.task-checkbox {
  width: 22px; height: 22px;
  border-radius: 7px;
  border: 1.5px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  transition: all var(--transition);
  font-size: 12px;
  color: transparent;
}

.task-checkbox:hover {
  border-color: var(--accent);
  background: var(--accent-glow);
}

.task-item.completed .task-checkbox {
  background: linear-gradient(135deg, #34d399, #059669);
  border-color: #34d399;
  color: white;
  box-shadow: 0 0 10px var(--accent-done-glow);
}

/* ── Task Text ─────────────────────────── */

.task-text {
  flex: 1;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.4;
  word-break: break-word;
  transition: color var(--transition);
}

/* ── Priority Badge ────────────────────── */

.priority-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 9px;
  border-radius: var(--radius-pill);
  flex-shrink: 0;
  font-family: var(--font-mono);
}

.badge-low {
  background: rgba(52, 211, 153, 0.15);
  color: var(--priority-low);
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.badge-medium {
  background: rgba(251, 191, 36, 0.12);
  color: var(--priority-medium);
  border: 1px solid rgba(251, 191, 36, 0.22);
}

.badge-high {
  background: rgba(248, 113, 113, 0.12);
  color: var(--priority-high);
  border: 1px solid rgba(248, 113, 113, 0.22);
}

/* ── Delete Button ─────────────────────── */

.delete-btn {
  width: 30px; height: 30px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 15px;
  transition: all var(--transition);
  flex-shrink: 0;
  line-height: 1;
}

.delete-btn:hover {
  background: rgba(248, 113, 113, 0.15);
  border-color: rgba(248, 113, 113, 0.30);
  color: var(--accent-danger);
  transform: scale(1.1);
}

/* ── Empty State ───────────────────────── */

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: fadeIn 0.4s ease both;
}

.empty-state.visible {
  display: flex;
}

.empty-icon {
  font-size: 36px;
  color: var(--text-muted);
  margin-bottom: 4px;
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50%       { opacity: 0.7; transform: scale(1.08); }
}

.empty-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-secondary);
}

.empty-sub {
  font-size: 13px;
  color: var(--text-muted);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Scrollbar ─────────────────────────── */

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: var(--radius-pill);
}

/* ── Responsive ────────────────────────── */

@media (max-width: 520px) {
  body { padding: 1rem 0.75rem 3rem; }
  .glass-header { padding: 1rem; }
  .app-title { font-size: 18px; }
  .input-row { flex-direction: column; align-items: stretch; }
  .input-wrap { min-width: unset; }
  .add-btn { width: 100%; justify-content: center; text-align: center; }
  .danger-tab { margin-left: 0; }
}
