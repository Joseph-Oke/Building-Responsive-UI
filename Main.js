/* Main.JS */

/* Dark/Night switch= */
const darkModeKey = 'darkMode';
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
  
  if (localStorage.getItem(darkModeKey) === 'enabled') {
    body.classList.add('dark-mode');
  }

  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.checked = body.classList.contains('dark-mode');
    darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem(darkModeKey, 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem(darkModeKey, 'disabled');
      }
    });
  }
});

/* Task Storage */
const TASKS_KEY = 'campusTasks';

function getTasks() {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));
  return tasks ? tasks : [];
}

function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function addTask(task) {
  const tasks = getTasks();
  task.id = Date.now(); // unique ID
  task.createdAt = new Date().toISOString();
  tasks.push(task);
  saveTasks(tasks);
}

function editTask(id, updatedTask) {
  const tasks = getTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index > -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    saveTasks(tasks);
  }
}

function deleteTask(id) {
  const tasks = getTasks();
  const filtered = tasks.filter(t => t.id !== id);
  saveTasks(filtered);
}

/* Validation and Search */
const regex = {
  tag: /^@tag:\w+/i,
  time: /\b\d{2}:\d{2}\b/g,
  title: /^.{1,100}$/,
  duration: /^\d+$/
};

function validateTask(task) {
  if (!regex.title.test(task.title)) return 'Invalid title';
  if (!regex.duration.test(String(task.duration))) return 'Invalid duration';
  if (!task.dueDate) return 'Due date required';
  if (!regex.tag.test(`@tag:${task.tag}`)) return 'Invalid tag format, e.g., @tag:Study';
  return true;
}

function searchTasks(query) {
  const tasks = getTasks();
  const lowerQuery = query.toLowerCase();
  return tasks.filter(t =>
    t.title.toLowerCase().includes(lowerQuery) ||
    t.tag.toLowerCase().includes(lowerQuery)
  );
}

/* UI Rendering */
function renderTasks(tasks, container) {
  container.innerHTML = '';
  if (!tasks.length) {
    container.innerHTML = '<p>No tasks yet</p>';
    return;
  }
  tasks.forEach(t => {
    const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `
      <h4>${t.title}</h4>
      <p>Due: ${t.dueDate}</p>
      <p>Duration: ${t.duration} min</p>
      <p>Tag: ${t.tag}</p>
      <button class="edit-btn" data-id="${t.id}">Edit</button>
      <button class="delete-btn" data-id="${t.id}">Delete</button>
    `;
    container.appendChild(div);
  });
  attachTaskListeners(container);
}

function attachTaskListeners(container) {
  container.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      deleteTask(id);
      renderTasks(getTasks(), container);
    });
  });

  container.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const task = getTasks().find(t => t.id === id);
      const newTitle = prompt('Edit Title', task.title);
      if (newTitle) editTask(id, { title: newTitle });
      renderTasks(getTasks(), container);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Tasks container on records page
  const recordsContainer = document.querySelector('.records-section');
  if (recordsContainer) {
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'tasks-container';
    recordsContainer.appendChild(tasksDiv);
    renderTasks(getTasks(), tasksDiv);

    const searchInput = document.querySelector('.search-bar');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        const filtered = searchTasks(e.target.value);
        renderTasks(filtered, tasksDiv);
      });
    }
  }

  // Auto-save toggle in Settings page
  const autoSaveToggle = document.getElementById('autoSave');
  if (autoSaveToggle) {
    autoSaveToggle.checked = localStorage.getItem('autoSave') === 'true';
    autoSaveToggle.addEventListener('change', () => {
      localStorage.setItem('autoSave', autoSaveToggle.checked);
    });
  }
});
// force-check dark mode toggle
console.log('Dark mode active:', document.body.classList.contains('dark-mode'));

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');

  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload

      const title = document.getElementById('title').value.trim();
      const duration = document.getElementById('duration').value.trim();
      const dueDate = document.getElementById('date').value;
      const tag = document.getElementById('tag').value.trim();

      if (!title || !duration || !dueDate || !tag) {
        alert('Please fill all fields.');
        return;
      }

      const newTask = { title, duration, dueDate, tag };
      addTask(newTask); 

      alert('Task saved successfully!');

      // Optional: redirect to dashboard
      window.location.href = 'Dashboard.html';
    });
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
}

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = hamburger.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});


