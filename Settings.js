document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const notifications = document.getElementById('notifications');
  const autoSave = document.getElementById('autoSave');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const saveBtn = document.getElementById('saveBtn');
  const exportBtn = document.getElementById('exportTasksBtn');
  const importInput = document.getElementById('importTasksInput');

  // Load saved settings from localStorage
  notifications.checked = JSON.parse(localStorage.getItem('notifications')) || false;
  autoSave.checked = JSON.parse(localStorage.getItem('autoSave')) || false;
  darkModeToggle.checked = localStorage.getItem('darkMode') === 'enabled';

  // Save settings
  saveBtn.addEventListener('click', () => {
    localStorage.setItem('notifications', notifications.checked);
    localStorage.setItem('autoSave', autoSave.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');
    alert('Settings saved!');
  });

  // Export tasks as JSON
  exportBtn.addEventListener('click', () => {
    const tasks = JSON.parse(localStorage.getItem('campusTasks')) || [];
    if (!tasks.length) {
      alert('No tasks to export!');
      return;
    }

    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tasks.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Tasks exported successfully!');
  });

  // Import tasks from JSON
  importInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedTasks = JSON.parse(e.target.result);

        // Validate tasks array
        if (!Array.isArray(importedTasks)) throw new Error('Invalid JSON format');
        importedTasks.forEach(task => {
          if (!task.id || !task.title || !task.dueDate) {
            throw new Error('Invalid task structure detected');
          }
        });

        // Save to localStorage
        localStorage.setItem('campusTasks', JSON.stringify(importedTasks));
        alert('Tasks imported successfully!');
      } catch (err) {
        alert('Error importing tasks: ' + err.message);
      }
    };
    reader.readAsText(file);
  });
});
