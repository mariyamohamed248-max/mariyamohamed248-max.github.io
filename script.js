/**
 * ============================================================================
 * MASHRUUCA: MARYAMA PINK DASHBOARD ♡
 * Academic Project & Task Management System
 * Ardayga: Maryama Mohamed
 * Teknoolojiyada: HTML5, CSS3 (3D Glassmorphism), Vanilla JavaScript, LocalStorage
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. CONSTANTS & LOCALSTORAGE KEYS
// ----------------------------------------------------------------------------
const STORAGE_KEYS = {
  PROJECTS: 'maryama_pink_projects_v1',
  TASKS: 'maryama_pink_tasks_v1',
  ACTIVITIES: 'maryama_pink_activities_v1',
  SETTINGS: 'maryama_pink_settings_v1',
};

// ----------------------------------------------------------------------------
// 2. INITIAL DEMO DATA (XOGTA TUSAALAHA AH EE BILOWGA)
// ----------------------------------------------------------------------------
const INITIAL_DEMO_DATA = {
  settings: {
    profileName: 'Maryama Mohamed',
    profileRole: 'Faculty of Computer Science & IT',
    profileEmail: 'maryama.student@university.edu.so',
    theme: 'light',
    soundEnabled: true,
    animationsEnabled: true,
  },
  projects: [
    {
      id: 'proj-1',
      title: 'AI Patient Diagnosis System',
      description: 'Nidaamka ogaanshaha cudurrada oo adeegsanaya Machine Learning iyo Web Portal casri ah.',
      category: 'Final Year Project',
      status: 'Active',
      startDate: '2026-09-01',
      dueDate: '2026-11-30',
      createdAt: '2026-09-01T08:00:00Z',
    },
    {
      id: 'proj-2',
      title: 'Distributed Database Lab',
      description: 'Naqshadaynta kaydka xogta ee PostgreSQL, Sharding, iyo Replication oo lagu sameeyay shabakad fidsan.',
      category: 'Database Systems',
      status: 'Active',
      startDate: '2026-10-01',
      dueDate: '2026-11-15',
      createdAt: '2026-10-01T09:30:00Z',
    },
    {
      id: 'proj-3',
      title: 'Cloud Computing Seminar',
      description: 'Diyaarinta bandhigga jaamacadda ee ku saabsan AWS Lambda, Microservices, iyo Docker Containers.',
      category: 'Cloud Architecture',
      status: 'Completed',
      startDate: '2026-09-15',
      dueDate: '2026-10-20',
      createdAt: '2026-09-15T10:00:00Z',
    },
    {
      id: 'proj-4',
      title: 'Web Engineering Portfolio',
      description: 'Horumarinta bogag shabakadeed oo leh naqshad 3D Pink Aesthetic ah iyo maamul hawleed buuxa.',
      category: 'Web Development',
      status: 'Active',
      startDate: '2026-10-10',
      dueDate: '2026-11-05',
      createdAt: '2026-10-10T11:00:00Z',
    },
  ],
  tasks: [
    {
      id: 'task-1',
      projectId: 'proj-1',
      title: 'Daraasadda Qoraallada Hore (Literature Review on ML)',
      description: 'Ururi oo baadh 15 cilmi-baaris oo ku saabsan moodallada Convolutional Neural Networks.',
      category: 'Research',
      priority: 'High',
      status: 'Completed',
      startDate: '2026-09-02',
      dueDate: '2026-09-25',
      createdAt: '2026-09-02T10:00:00Z',
      completedAt: '2026-09-24T16:00:00Z',
    },
    {
      id: 'task-2',
      projectId: 'proj-1',
      title: 'Diyaarinta Cutubka 1-aad: Hordhaca Mashruuca AI',
      description: 'Qor problem statement, scope, research objectives, iyo faa\'iidada mashruuca.',
      category: 'Documentation',
      priority: 'High',
      status: 'Completed',
      startDate: '2026-09-26',
      dueDate: '2026-10-10',
      createdAt: '2026-09-26T12:00:00Z',
      completedAt: '2026-10-09T14:30:00Z',
    },
    {
      id: 'task-3',
      projectId: 'proj-2',
      title: 'Sawiridda Jaantuska ERD & Schema Database',
      description: 'Diyaari Entity Relationship Diagram oo buuxa oo leh foreign keys iyo indexing sax ah.',
      category: 'Database',
      priority: 'Medium',
      status: 'In Progress',
      startDate: '2026-10-15',
      dueDate: '2026-10-28', // Maanta!
      createdAt: '2026-10-15T09:00:00Z',
      completedAt: null,
    },
    {
      id: 'task-4',
      projectId: 'proj-1',
      title: 'Dhisidda Model-ka AI & Tijaabinta Xogta Bukaanada',
      description: 'Tababar model-ka adoo adeegsanaya Python, TensorFlow iyo Scikit-Learn.',
      category: 'Final Project',
      priority: 'High',
      status: 'In Progress',
      startDate: '2026-10-20',
      dueDate: '2026-11-02',
      createdAt: '2026-10-20T11:00:00Z',
      completedAt: null,
    },
    {
      id: 'task-5',
      projectId: 'proj-3',
      title: 'Diyaarinta Slides-ka Seminar-ka Cloud Computing',
      description: 'Diyaari PowerPoint leh 25 bog oo sharaxaya Microservices iyo Serverless computing.',
      category: 'Presentation',
      priority: 'Medium',
      status: 'Completed',
      startDate: '2026-10-05',
      dueDate: '2026-10-18',
      createdAt: '2026-10-05T14:00:00Z',
      completedAt: '2026-10-17T18:00:00Z',
    },
    {
      id: 'task-6',
      projectId: 'proj-4',
      title: 'Dhameystir Naqshadda 3D Pink Aesthetic Glassmorphism',
      description: 'U samee dashboard-ka Maryama naqshad casri ah oo leh kaarar u eg muraayad iyo midabyo pink ah.',
      category: 'Web Dev',
      priority: 'High',
      status: 'In Progress',
      startDate: '2026-10-22',
      dueDate: '2026-10-30',
      createdAt: '2026-10-22T08:30:00Z',
      completedAt: null,
    },
    {
      id: 'task-7',
      projectId: 'proj-2',
      title: 'Qorista Query-yada SQL & Benchmark Imtixaanka',
      description: 'Tijaabi xawaaraha query-yada marka ay xogtu gaarto 100,000 oo diiwaan.',
      category: 'Lab Work',
      priority: 'Low',
      status: 'To Do',
      startDate: '2026-10-25',
      dueDate: '2026-11-08',
      createdAt: '2026-10-25T15:00:00Z',
      completedAt: null,
    },
    {
      id: 'task-8',
      projectId: 'proj-4',
      title: 'Ku Daridda Full CRUD iyo LocalStorage API',
      description: 'Hubi in projects iyo tasks lagu dari karo, wax laga beddeli karo, la tirtiri karo, oo browser-ka ku kaydsanyihiin.',
      category: 'Web Dev',
      priority: 'High',
      status: 'Completed',
      startDate: '2026-10-24',
      dueDate: '2026-10-28',
      createdAt: '2026-10-24T10:00:00Z',
      completedAt: '2026-10-28T12:00:00Z',
    },
    {
      id: 'task-9',
      projectId: 'proj-1',
      title: 'Gudbinta Warbixinta Hore (Midterm Submission)',
      description: 'U dir supervisor-ka nuqulka PDF-ka ee cutubyada 1 iyo 2 si loo eego.',
      category: 'Assignment',
      priority: 'High',
      status: 'To Do',
      startDate: '2026-10-18',
      dueDate: '2026-10-26', // Overdue for testing purposes!
      createdAt: '2026-10-18T09:00:00Z',
      completedAt: null,
    },
  ],
  activities: [
    {
      id: 'act-1',
      text: 'Maryama Mohamed waxay dhammaystirtay hawsha: Full CRUD iyo LocalStorage API',
      time: '2 saac ka hor',
      type: 'completed',
    },
    {
      id: 'act-2',
      text: 'Mashruuc cusub ayaa la abuuray: Web Engineering Portfolio',
      time: 'Shalay',
      type: 'create',
    },
    {
      id: 'act-3',
      text: 'Seminar-ka Cloud Computing ayaa si guul leh loo soo gebagebeeyay',
      time: '3 maalmood ka hor',
      type: 'completed',
    },
    {
      id: 'act-4',
      text: 'Maryama Pink Dashboard nidaamka xogta ayaa si guul ah loo furay',
      time: 'Todobaadkan',
      type: 'info',
    },
  ],
};

// ----------------------------------------------------------------------------
// 3. APPLICATION STATE OBJECT
// ----------------------------------------------------------------------------
const AppState = {
  projects: [],
  tasks: [],
  activities: [],
  settings: {},
  
  // Navigation & View Filters
  currentView: 'dashboard',
  selectedCalendarDate: new Date(),
  calendarViewingMonth: new Date().getMonth(),
  calendarViewingYear: new Date().getFullYear(),
  
  // Task Filters
  taskFilters: {
    search: '',
    status: 'all',
    priority: 'all',
    category: 'all',
    project: 'all',
    sortBy: 'dueDateAsc',
    viewMode: 'grid', // 'grid' or 'list'
  },
  
  // Project Filters
  projectFilters: {
    search: '',
    status: 'all',
    category: 'all',
    viewMode: 'grid',
  },
  
  // Modal tracking
  pendingDeleteAction: null,
};

// ----------------------------------------------------------------------------
// 4. AUDIO SYNTHESIZER (WEB AUDIO API)
// ----------------------------------------------------------------------------
const SoundFX = {
  ctx: null,
  
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },
  
  playTone(freq, duration, type = 'sine', gainVal = 0.15) {
    if (!AppState.settings.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio FX error:', e);
    }
  },
  
  // Cheerful chime on task completion (C5 -> G5)
  playSuccess() {
    this.playTone(523.25, 0.15, 'sine', 0.2); // C5
    setTimeout(() => {
      this.playTone(783.99, 0.35, 'sine', 0.25); // G5
    }, 120);
  },
  
  // Subtle soft pop on button tap
  playClick() {
    this.playTone(680, 0.06, 'triangle', 0.08);
  },
  
  // Delete / Alert tone
  playAlert() {
    this.playTone(330, 0.2, 'sawtooth', 0.1);
  },
};

// ----------------------------------------------------------------------------
// 5. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------------------------
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconMap = {
    success: '🎉',
    error: '❌',
    warning: '⚠️',
    info: '🌸',
  };
  
  toast.innerHTML = `
    <span>${iconMap[type] || '✨'}</span>
    <span>${escapeHtml(message)}</span>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ----------------------------------------------------------------------------
// 6. HELPER FUNCTIONS & FORMATTERS
// ----------------------------------------------------------------------------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateString) {
  if (!dateString) return '-';
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  const day = String(d.getDate()).padStart(2, '0');
  const monthNames = ['Jann', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Lul', 'Ogs', 'Seb', 'Okt', 'Nof', 'Dis'];
  return `${day} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
}

function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isDateOverdue(dueDate, status) {
  if (status === 'Completed') return false;
  if (!dueDate) return false;
  const today = getTodayString();
  return dueDate < today;
}

function isDateToday(dueDate) {
  if (!dueDate) return false;
  return dueDate === getTodayString();
}

function logActivity(text, type = 'info') {
  const newAct = {
    id: 'act-' + Date.now(),
    text,
    time: 'Hadda (Just now)',
    type,
  };
  AppState.activities.unshift(newAct);
  if (AppState.activities.length > 20) {
    AppState.activities.pop();
  }
  saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
  renderDashboardActivities();
}

// ----------------------------------------------------------------------------
// 7. LOCALSTORAGE DATA ENGINE
// ----------------------------------------------------------------------------
function loadFromStorage(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Khalad marka la akhrinayay LocalStorage key: ${key}`, err);
    return defaultValue;
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error(`Khalad marka la kaydinayay LocalStorage key: ${key}`, err);
    showToast('Xogta ma kaydsamin: LocalStorage ayaa buuxa ama la diiday!', 'error');
    return false;
  }
}

function initializeDataStore() {
  // Load Settings
  AppState.settings = loadFromStorage(STORAGE_KEYS.SETTINGS, INITIAL_DEMO_DATA.settings);
  
  // Load Projects
  AppState.projects = loadFromStorage(STORAGE_KEYS.PROJECTS, null);
  if (!AppState.projects || !Array.isArray(AppState.projects)) {
    AppState.projects = [...INITIAL_DEMO_DATA.projects];
    saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
  }
  
  // Load Tasks
  AppState.tasks = loadFromStorage(STORAGE_KEYS.TASKS, null);
  if (!AppState.tasks || !Array.isArray(AppState.tasks)) {
    AppState.tasks = [...INITIAL_DEMO_DATA.tasks];
    saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
  }
  
  // Load Activities
  AppState.activities = loadFromStorage(STORAGE_KEYS.ACTIVITIES, null);
  if (!AppState.activities || !Array.isArray(AppState.activities)) {
    AppState.activities = [...INITIAL_DEMO_DATA.activities];
    saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
  }

  // Apply Theme & Profile
  applyTheme(AppState.settings.theme || 'light');
  updateProfileUI();
}

// ----------------------------------------------------------------------------
// 8. CRUD FOR PROJECTS (CREATE, READ, UPDATE, DELETE)
// ----------------------------------------------------------------------------

/** CREATE / UPDATE PROJECT */
function handleSaveProject(e) {
  e.preventDefault();
  
  const editId = document.getElementById('projectEditId').value;
  const title = document.getElementById('projectTitleInput').value.trim();
  const description = document.getElementById('projectDescInput').value.trim();
  const category = document.getElementById('projectCategoryInput').value.trim();
  const status = document.getElementById('projectStatusSelect').value;
  const startDate = document.getElementById('projectStartDateInput').value;
  const dueDate = document.getElementById('projectDueDateInput').value;
  
  // Validation
  if (!title) {
    document.getElementById('projectTitleError').textContent = 'Fadlan geli magaca mashruuca!';
    return;
  }
  document.getElementById('projectTitleError').textContent = '';
  
  if (editId) {
    // UPDATE
    const index = AppState.projects.findIndex(p => p.id === editId);
    if (index !== -1) {
      AppState.projects[index] = {
        ...AppState.projects[index],
        title,
        description,
        category,
        status,
        startDate,
        dueDate,
      };
      saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
      logActivity(`Waxaa wax laga beddelay mashruuca: "${title}"`, 'edit');
      showToast(`Mashruuca "${title}" si guul leh ayaa loo cusboonaysiiyey! ✨`, 'success');
    }
  } else {
    // CREATE
    const newProject = {
      id: 'proj-' + Date.now(),
      title,
      description,
      category: category || 'General',
      status: status || 'Active',
      startDate: startDate || getTodayString(),
      dueDate: dueDate || getTodayString(),
      createdAt: new Date().toISOString(),
    };
    AppState.projects.unshift(newProject);
    saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
    logActivity(`Mashruuc cusub ayaa la abuuray: "${title}"`, 'create');
    showToast(`Mashruuc cusub "${title}" si guul leh ayaa loo abuuray! 📁`, 'success');
  }
  
  SoundFX.playSuccess();
  closeProjectModal();
  refreshAllViews();
}

/** OPEN PROJECT MODAL FOR CREATE OR EDIT */
function openProjectModal(projectId = null) {
  const modal = document.getElementById('projectModalBackdrop');
  const titleElem = document.getElementById('projectModalTitle');
  const form = document.getElementById('projectForm');
  form.reset();
  document.getElementById('projectTitleError').textContent = '';
  
  if (projectId) {
    const proj = AppState.projects.find(p => p.id === projectId);
    if (proj) {
      titleElem.textContent = 'Wax Ka Beddel Mashruuca';
      document.getElementById('projectEditId').value = proj.id;
      document.getElementById('projectTitleInput').value = proj.title;
      document.getElementById('projectDescInput').value = proj.description || '';
      document.getElementById('projectCategoryInput').value = proj.category || '';
      document.getElementById('projectStatusSelect').value = proj.status || 'Active';
      document.getElementById('projectStartDateInput').value = proj.startDate || '';
      document.getElementById('projectDueDateInput').value = proj.dueDate || '';
    }
  } else {
    titleElem.textContent = 'Abuur Project Cusub';
    document.getElementById('projectEditId').value = '';
    document.getElementById('projectStartDateInput').value = getTodayString();
    
    // Default due date: 30 days ahead
    const d = new Date();
    d.setDate(d.getDate() + 30);
    document.getElementById('projectDueDateInput').value = d.toISOString().split('T')[0];
  }
  
  modal.classList.add('open');
}

function closeProjectModal() {
  document.getElementById('projectModalBackdrop').classList.remove('open');
}

/** CONFIRM & DELETE PROJECT */
function requestDeleteProject(projectId) {
  const proj = AppState.projects.find(p => p.id === projectId);
  if (!proj) return;
  
  const linkedTasksCount = AppState.tasks.filter(t => t.projectId === projectId).length;
  
  let msg = `Ma hubtaa inaad tirtirto mashruuca "${proj.title}"?`;
  if (linkedTasksCount > 0) {
    msg += ` Waxaa ku jira ${linkedTasksCount} hawlood oo mashruucan ku xiran. Dhammaantood waa la tirtiri doonaa.`;
  }
  
  openConfirmModal(
    'Tirtir Mashruuca',
    msg,
    () => {
      // Delete linked tasks as well
      AppState.tasks = AppState.tasks.filter(t => t.projectId !== projectId);
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      
      // Delete project
      AppState.projects = AppState.projects.filter(p => p.id !== projectId);
      saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
      
      logActivity(`Waxaa la tirtiray mashruuca: "${proj.title}"`, 'delete');
      showToast(`Mashruuca "${proj.title}" waa la tirtiray!`, 'info');
      SoundFX.playAlert();
      refreshAllViews();
    }
  );
}

// ----------------------------------------------------------------------------
// 9. CRUD FOR TASKS (CREATE, READ, UPDATE, DELETE)
// ----------------------------------------------------------------------------

/** CREATE / UPDATE TASK */
function handleSaveTask(e) {
  e.preventDefault();
  
  const editId = document.getElementById('taskEditId').value;
  const title = document.getElementById('taskTitleInput').value.trim();
  const description = document.getElementById('taskDescInput').value.trim();
  const projectId = document.getElementById('taskProjectSelect').value;
  const category = document.getElementById('taskCategoryInput').value.trim();
  const priority = document.getElementById('taskPrioritySelect').value;
  const status = document.getElementById('taskStatusSelect').value;
  const startDate = document.getElementById('taskStartDateInput').value;
  const dueDate = document.getElementById('taskDueDateInput').value;
  
  if (!title) {
    document.getElementById('taskTitleError').textContent = 'Fadlan geli cinwaanka hawsha!';
    return;
  }
  document.getElementById('taskTitleError').textContent = '';
  
  if (!dueDate) {
    document.getElementById('taskDueDateError').textContent = 'Fadlan dooro taariikhda dhammaadka (Due Date)!';
    return;
  }
  document.getElementById('taskDueDateError').textContent = '';
  
  if (editId) {
    // UPDATE
    const index = AppState.tasks.findIndex(t => t.id === editId);
    if (index !== -1) {
      const prevStatus = AppState.tasks[index].status;
      const completedAt = (status === 'Completed' && prevStatus !== 'Completed')
        ? new Date().toISOString()
        : (status !== 'Completed' ? null : AppState.tasks[index].completedAt);
        
      AppState.tasks[index] = {
        ...AppState.tasks[index],
        title,
        description,
        projectId,
        category,
        priority,
        status,
        startDate,
        dueDate,
        completedAt,
      };
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      logActivity(`Waxaa wax laga beddelay hawsha: "${title}"`, 'edit');
      showToast(`Hawsha "${title}" si guul leh ayaa loo cusboonaysiiyey! ✨`, 'success');
    }
  } else {
    // CREATE
    const newTask = {
      id: 'task-' + Date.now(),
      title,
      description,
      projectId: projectId || (AppState.projects[0] ? AppState.projects[0].id : 'proj-1'),
      category: category || 'Assignment',
      priority: priority || 'Medium',
      status: status || 'To Do',
      startDate: startDate || getTodayString(),
      dueDate: dueDate,
      createdAt: new Date().toISOString(),
      completedAt: status === 'Completed' ? new Date().toISOString() : null,
    };
    AppState.tasks.unshift(newTask);
    saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
    logActivity(`Hawl cusub ayaa lagu daray: "${title}"`, 'create');
    showToast(`Hawl cusub "${title}" si guul leh ayaa loo diiwaangeliyey! 📋`, 'success');
  }
  
  SoundFX.playSuccess();
  closeTaskModal();
  refreshAllViews();
}

/** OPEN TASK MODAL FOR CREATE OR EDIT */
function openTaskModal(taskId = null, defaultDate = null) {
  const modal = document.getElementById('taskModalBackdrop');
  const titleElem = document.getElementById('taskModalTitle');
  const form = document.getElementById('taskForm');
  form.reset();
  document.getElementById('taskTitleError').textContent = '';
  document.getElementById('taskDueDateError').textContent = '';
  
  // Populate projects dropdown
  populateTaskProjectDropdown();
  
  if (taskId) {
    const task = AppState.tasks.find(t => t.id === taskId);
    if (task) {
      titleElem.textContent = 'Wax Ka Beddel Hawsha';
      document.getElementById('taskEditId').value = task.id;
      document.getElementById('taskTitleInput').value = task.title;
      document.getElementById('taskDescInput').value = task.description || '';
      document.getElementById('taskProjectSelect').value = task.projectId;
      document.getElementById('taskCategoryInput').value = task.category || '';
      document.getElementById('taskPrioritySelect').value = task.priority || 'Medium';
      document.getElementById('taskStatusSelect').value = task.status || 'To Do';
      document.getElementById('taskStartDateInput').value = task.startDate || '';
      document.getElementById('taskDueDateInput').value = task.dueDate || '';
    }
  } else {
    titleElem.textContent = 'Ku dar Task Cusub';
    document.getElementById('taskEditId').value = '';
    document.getElementById('taskStartDateInput').value = getTodayString();
    
    if (defaultDate) {
      document.getElementById('taskDueDateInput').value = defaultDate;
    } else {
      const d = new Date();
      d.setDate(d.getDate() + 3);
      document.getElementById('taskDueDateInput').value = d.toISOString().split('T')[0];
    }
  }
  
  modal.classList.add('open');
}

function closeTaskModal() {
  document.getElementById('taskModalBackdrop').classList.remove('open');
}

/** TOGGLE TASK COMPLETION STATUS */
function toggleTaskCompletion(taskId) {
  const task = AppState.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  if (task.status === 'Completed') {
    task.status = 'To Do';
    task.completedAt = null;
    logActivity(`Hawsha "${task.title}" ayaa dib loo furay (To Do)`, 'info');
    showToast(`Hawsha dib ayaa loo furay! ⏳`, 'info');
  } else {
    task.status = 'Completed';
    task.completedAt = new Date().toISOString();
    SoundFX.playSuccess();
    logActivity(`Maryama Mohamed waxay dhammaystirtay hawsha: "${task.title}" ♡`, 'completed');
    showToast(`Hambalyo Maryama! Hawsha "${task.title}" waa dhammaystirtay! 🎉`, 'success');
  }
  
  saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
  refreshAllViews();
}

/** CONFIRM & DELETE TASK */
function requestDeleteTask(taskId) {
  const task = AppState.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  openConfirmModal(
    'Tirtir Hawsha',
    `Ma hubtaa inaad tirtirto hawsha "${task.title}"?`,
    () => {
      AppState.tasks = AppState.tasks.filter(t => t.id !== taskId);
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      logActivity(`Waxaa la tirtiray hawsha: "${task.title}"`, 'delete');
      showToast(`Hawsha waa la tirtiray!`, 'info');
      SoundFX.playAlert();
      refreshAllViews();
    }
  );
}

/** POPULATE PROJECT SELECT DROPDOWN FOR TASK MODAL */
function populateTaskProjectDropdown() {
  const select = document.getElementById('taskProjectSelect');
  if (!select) return;
  select.innerHTML = '';
  
  if (AppState.projects.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = '-- Ma jiraan mashaariic diiwaangashan --';
    select.appendChild(opt);
    return;
  }
  
  AppState.projects.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.title;
    select.appendChild(opt);
  });
}

// ----------------------------------------------------------------------------
// 10. REUSABLE CONFIRMATION MODAL
// ----------------------------------------------------------------------------
function openConfirmModal(title, message, onConfirm) {
  const backdrop = document.getElementById('confirmModalBackdrop');
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalMessage').textContent = message;
  AppState.pendingDeleteAction = onConfirm;
  backdrop.classList.add('open');
}

function closeConfirmModal() {
  const backdrop = document.getElementById('confirmModalBackdrop');
  backdrop.classList.remove('open');
  AppState.pendingDeleteAction = null;
}

// ----------------------------------------------------------------------------
// 11. TASK DETAILS QUICK VIEW MODAL
// ----------------------------------------------------------------------------
function openTaskDetailModal(taskId) {
  const task = AppState.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  const project = AppState.projects.find(p => p.id === task.projectId);
  const projectName = project ? project.title : 'Mashruuc Guud';
  
  const modal = document.getElementById('taskDetailModalBackdrop');
  document.getElementById('taskDetailTitle').textContent = task.title;
  
  const body = document.getElementById('taskDetailBody');
  body.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div>
        <span class="proj-category-pill">${escapeHtml(task.category)}</span>
        <span class="task-priority-pill priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)} Priority</span>
        <span class="task-status-pill status-${task.status.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(task.status)}</span>
      </div>
      <p style="font-size:0.95rem; line-height:1.6; margin:8px 0;">
        ${escapeHtml(task.description || 'Ma jirto sharaxaad dheeraad ah.')}
      </p>
      <div style="background:var(--pink-soft); padding:12px; border-radius:var(--radius-md); font-size:0.85rem; display:flex; flex-direction:column; gap:6px;">
        <p><strong>📁 Mashruuca:</strong> ${escapeHtml(projectName)}</p>
        <p><strong>📅 Taariikhda Bilowga:</strong> ${formatDate(task.startDate)}</p>
        <p><strong>⏰ Taariikhda Due:</strong> ${formatDate(task.dueDate)} ${isDateOverdue(task.dueDate, task.status) ? '<span style="color:var(--color-danger); font-weight:700;">(Overdue ⚠️)</span>' : ''}</p>
        ${task.completedAt ? `<p><strong>✅ Waqtiga la dhammeeyay:</strong> ${formatDate(task.completedAt)}</p>` : ''}
      </div>
    </div>
  `;
  
  const editBtn = document.getElementById('taskDetailEditBtn');
  editBtn.onclick = () => {
    closeTaskDetailModal();
    openTaskModal(task.id);
  };
  
  const toggleBtn = document.getElementById('taskDetailToggleBtn');
  toggleBtn.textContent = task.status === 'Completed' ? 'Dib u Fur Hawsha' : 'Calaamadee inuu Dhammaaday ✨';
  toggleBtn.onclick = () => {
    toggleTaskCompletion(task.id);
    closeTaskDetailModal();
  };
  
  modal.classList.add('open');
}

function closeTaskDetailModal() {
  document.getElementById('taskDetailModalBackdrop').classList.remove('open');
}

// ----------------------------------------------------------------------------
// 12. DYNAMIC METRICS & CALCULATIONS
// ----------------------------------------------------------------------------
function calculateMetrics() {
  const totalProjects = AppState.projects.length;
  const totalTasks = AppState.tasks.length;
  const completedTasks = AppState.tasks.filter(t => t.status === 'Completed').length;
  const pendingTasks = totalTasks - completedTasks;
  const overallRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  const overdueTasks = AppState.tasks.filter(t => isDateOverdue(t.dueDate, t.status)).length;
  const dueTodayTasks = AppState.tasks.filter(t => isDateToday(t.dueDate) && t.status !== 'Completed').length;
  
  const highPriorityTasks = AppState.tasks.filter(t => t.priority === 'High');
  const highPriorityCompleted = highPriorityTasks.filter(t => t.status === 'Completed').length;
  const highPriorityRate = highPriorityTasks.length > 0 ? Math.round((highPriorityCompleted / highPriorityTasks.length) * 100) : 100;
  
  const avgTasksPerProject = totalProjects > 0 ? (totalTasks / totalProjects).toFixed(1) : 0;
  
  return {
    totalProjects,
    totalTasks,
    completedTasks,
    pendingTasks,
    overallRate,
    overdueTasks,
    dueTodayTasks,
    highPriorityTasks: highPriorityTasks.length,
    highPriorityRate,
    avgTasksPerProject,
  };
}

function updateDashboardMetrics() {
  const m = calculateMetrics();
  
  // Dashboard Hero
  document.getElementById('heroTotalTasksCount').textContent = `${m.totalTasks} Tasks`;
  document.getElementById('heroOverallRate').textContent = `${m.overallRate}%`;
  document.getElementById('heroProgressFill').style.width = `${m.overallRate}%`;
  
  // Summary Metrics Cards
  document.getElementById('statTotalProjects').textContent = m.totalProjects;
  document.getElementById('statTotalTasks').textContent = m.totalTasks;
  document.getElementById('statCompletedTasks').textContent = m.completedTasks;
  document.getElementById('statCompletedSubtitle').textContent = `${m.overallRate}% ayaa la dhammaystiray`;
  document.getElementById('statPendingTasks').textContent = m.pendingTasks;
  
  // Overall Circular Gauge
  document.getElementById('dashOverallGauge').textContent = `${m.overallRate}%`;
  document.getElementById('dashCircularStroke').setAttribute('stroke-dasharray', `${m.overallRate}, 100`);
  
  const progressLabel = document.getElementById('dashProgressLabel');
  if (m.overallRate >= 80) progressLabel.textContent = 'Aad u Wanaagsan 🌟';
  else if (m.overallRate >= 50) progressLabel.textContent = 'Heer Dhexe ✨';
  else progressLabel.textContent = 'Biloow Fiican 🌸';
  
  // Badges & Student Card
  document.getElementById('dashTotalBadge').textContent = m.totalTasks;
  document.getElementById('projectsCountBadge').textContent = m.totalProjects;
  document.getElementById('tasksCountBadge').textContent = m.totalTasks;
  document.getElementById('calendarDueBadge').textContent = m.overdueTasks + m.dueTodayTasks;
  document.getElementById('notifCountBadge').textContent = m.overdueTasks + m.dueTodayTasks;
  document.getElementById('dashOverdueCountBadge').textContent = `${m.overdueTasks} Overdue`;
  
  document.getElementById('dashCompletedRate').textContent = `${m.overallRate}%`;
  document.getElementById('dashHighPriorityCount').textContent = m.highPriorityTasks;
  document.getElementById('dashTotalProjectsCount').textContent = m.totalProjects;
  
  // Quick Tab counters on Tasks view
  document.getElementById('tabCountAll').textContent = m.totalTasks;
  document.getElementById('tabCountTodo').textContent = AppState.tasks.filter(t => t.status === 'To Do').length;
  document.getElementById('tabCountInProgress').textContent = AppState.tasks.filter(t => t.status === 'In Progress').length;
  document.getElementById('tabCountCompleted').textContent = m.completedTasks;
  document.getElementById('tabCountOverdue').textContent = m.overdueTasks;
  
  // Statistics View KPI cards
  document.getElementById('kpiCompletionRate').textContent = `${m.overallRate}%`;
  document.getElementById('kpiHighPriorityRate').textContent = `${m.highPriorityRate}%`;
  document.getElementById('kpiAvgTasks').textContent = m.avgTasksPerProject;
}

// ----------------------------------------------------------------------------
// 13. DASHBOARD WIDGETS RENDERING
// ----------------------------------------------------------------------------

function renderDashboardProjects() {
  const container = document.getElementById('dashProjectsList');
  if (!container) return;
  container.innerHTML = '';
  
  if (AppState.projects.length === 0) {
    container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); padding:10px;">Ma jiraan mashaariic hadda. Guji "+ Mashruuc Cusub" si aad u bilowdo!</p>`;
    return;
  }
  
  // Show top 3 active projects
  const topProjects = AppState.projects.slice(0, 3);
  
  topProjects.forEach(proj => {
    const projTasks = AppState.tasks.filter(t => t.projectId === proj.id);
    const completed = projTasks.filter(t => t.status === 'Completed').length;
    const total = projTasks.length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    const item = document.createElement('div');
    item.className = 'dash-project-item';
    item.innerHTML = `
      <div class="dpi-header">
        <span class="dpi-name">${escapeHtml(proj.title)}</span>
        <span class="dpi-stat">${rate}% (${completed}/${total})</span>
      </div>
      <div class="card-progress-bar">
        <div class="progress-fill" style="width: ${rate}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderDashboardDeadlines() {
  const container = document.getElementById('dashDeadlinesList');
  if (!container) return;
  container.innerHTML = '';
  
  // Sort incomplete tasks by due date
  const pendingTasks = AppState.tasks
    .filter(t => t.status !== 'Completed')
    .sort((a, b) => (a.dueDate || '').localeCompare(b.dueDate || ''));
    
  if (pendingTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:0.85rem;">
        <span>🎉 Ma jiraan deadlines degdeg ah! Dhammaan hawlaha waa la dhammaystiray.</span>
      </div>
    `;
    return;
  }
  
  // Show first 4 upcoming tasks
  pendingTasks.slice(0, 4).forEach(task => {
    const overdue = isDateOverdue(task.dueDate, task.status);
    const today = isDateToday(task.dueDate);
    
    let badgeClass = 'badge-pill';
    let badgeText = formatDate(task.dueDate);
    
    if (overdue) {
      badgeClass = 'badge-alert';
      badgeText = 'Overdue ⚠️';
    } else if (today) {
      badgeClass = 'badge-pill';
      badgeText = 'Maanta! ⏰';
    }
    
    const card = document.createElement('div');
    card.className = `deadline-card ${overdue ? 'overdue' : (today ? 'today' : '')}`;
    card.onclick = () => openTaskDetailModal(task.id);
    card.style.cursor = 'pointer';
    
    card.innerHTML = `
      <div class="dl-info">
        <h5>${escapeHtml(task.title)}</h5>
        <p>${escapeHtml(task.category)} &bull; ${escapeHtml(task.priority)}</p>
      </div>
      <span class="${badgeClass}">${badgeText}</span>
    `;
    container.appendChild(card);
  });
}

function renderDashboardActivities() {
  const container = document.getElementById('dashActivityFeed');
  if (!container) return;
  container.innerHTML = '';
  
  if (AppState.activities.length === 0) {
    container.innerHTML = `<p style="font-size:0.82rem; color:var(--text-muted); padding:10px;">Ma jiraan dhaqdhaqaaqyo dhowaan la diiwaangeliyey.</p>`;
    return;
  }
  
  const iconMap = {
    completed: '✅',
    create: '✨',
    edit: '📝',
    delete: '🗑️',
    info: '🌸',
  };
  
  AppState.activities.slice(0, 5).forEach(act => {
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
      <span class="act-icon">${iconMap[act.type] || '⚡'}</span>
      <div class="act-text">
        <p>${escapeHtml(act.text)}</p>
        <span class="act-time">${escapeHtml(act.time)}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderNotificationsDropdown() {
  const container = document.getElementById('notifListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  const urgentTasks = AppState.tasks
    .filter(t => t.status !== 'Completed' && (isDateOverdue(t.dueDate, t.status) || isDateToday(t.dueDate)));
    
  if (urgentTasks.length === 0) {
    container.innerHTML = `<p style="font-size:0.82rem; color:var(--text-muted); padding:12px; text-align:center;">Ma jiraan wax ogeysiisyo degdeg ah ♡</p>`;
    return;
  }
  
  urgentTasks.forEach(task => {
    const overdue = isDateOverdue(task.dueDate, task.status);
    const item = document.createElement('div');
    item.className = `notif-item ${overdue ? 'overdue' : 'today'}`;
    item.innerHTML = `
      <span>${overdue ? '⚠️' : '⏰'}</span>
      <div>
        <strong>${escapeHtml(task.title)}</strong>
        <p style="font-size:0.75rem; color:var(--text-secondary);">${overdue ? 'Waqtigii wuu dhacay (' + formatDate(task.dueDate) + ')' : 'Maanta ayaa la rabaa!'}</p>
      </div>
    `;
    item.onclick = () => {
      document.getElementById('notificationsMenu').classList.remove('open');
      openTaskDetailModal(task.id);
    };
    container.appendChild(item);
  });
}

// ----------------------------------------------------------------------------
// 14. PROJECTS VIEW RENDERING
// ----------------------------------------------------------------------------
function renderProjectsView() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';
  
  let filtered = [...AppState.projects];
  
  // Search
  if (AppState.projectFilters.search) {
    const q = AppState.projectFilters.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q))
    );
  }
  
  // Status Filter
  if (AppState.projectFilters.status !== 'all') {
    filtered = filtered.filter(p => p.status === AppState.projectFilters.status);
  }
  
  // Category Filter
  if (AppState.projectFilters.category !== 'all') {
    filtered = filtered.filter(p => p.category === AppState.projectFilters.category);
  }
  
  // View mode class
  if (AppState.projectFilters.viewMode === 'list') {
    container.className = 'projects-display-area list-view';
  } else {
    container.className = 'projects-display-area';
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box glass-card">
        <div class="empty-state-icon">📁</div>
        <h3>Wax Mashruuc ah Lama Helin</h3>
        <p>Ma jiraan mashaariic buuxinaya shuruudaha raadinta ama filtarka aad dooratay.</p>
        <button class="btn btn-primary" onclick="openProjectModal()">+ Abuur Project Cusub</button>
      </div>
    `;
    return;
  }
  
  filtered.forEach(proj => {
    const projTasks = AppState.tasks.filter(t => t.projectId === proj.id);
    const completedTasks = projTasks.filter(t => t.status === 'Completed').length;
    const totalTasks = projTasks.length;
    const progressRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    card.setAttribute('data-tilt', '');
    
    card.innerHTML = `
      <div class="proj-top">
        <div class="proj-avatar">🌸</div>
        <div class="proj-badges">
          <span class="proj-category-pill">${escapeHtml(proj.category)}</span>
          <span class="proj-status-pill proj-status-${proj.status.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(proj.status)}</span>
        </div>
      </div>
      
      <div class="proj-body">
        <h3>${escapeHtml(proj.title)}</h3>
        <p>${escapeHtml(proj.description || 'Ma jirto sharaxaad la geliyey.')}</p>
      </div>
      
      <div class="proj-progress-section">
        <div class="proj-progress-meta">
          <span>Horumarka</span>
          <span style="color:var(--pink-primary);">${progressRate}% (${completedTasks}/${totalTasks})</span>
        </div>
        <div class="card-progress-bar">
          <div class="progress-fill" style="width: ${progressRate}%"></div>
        </div>
      </div>
      
      <div class="proj-dates">
        <span>📅 ${formatDate(proj.startDate)} &rarr; ${formatDate(proj.dueDate)}</span>
      </div>
      
      <div class="proj-footer-actions">
        <button class="btn btn-sm btn-secondary" onclick="filterTasksByProject('${proj.id}')">
          <span>📋 Eeg Tasks (${totalTasks})</span>
        </button>
        <div class="proj-action-group">
          <button class="btn-icon header-tool-btn" style="width:34px; height:34px;" title="Wax Ka Beddel" onclick="openProjectModal('${proj.id}')">
            <span>✏️</span>
          </button>
          <button class="btn-icon header-tool-btn" style="width:34px; height:34px;" title="Tirtir" onclick="requestDeleteProject('${proj.id}')">
            <span>🗑️</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function populateProjectCategoryFilter() {
  const select = document.getElementById('projectCategoryFilter');
  if (!select) return;
  const currentVal = select.value;
  select.innerHTML = '<option value="all">Dhammaan Qaybaha (All Categories)</option>';
  
  const cats = Array.from(new Set(AppState.projects.map(p => p.category).filter(Boolean)));
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
  select.value = currentVal;
}

function filterTasksByProject(projectId) {
  switchView('tasks');
  const projectSelect = document.getElementById('taskProjectFilter');
  if (projectSelect) {
    projectSelect.value = projectId;
    AppState.taskFilters.project = projectId;
    renderTasksView();
  }
}

// ----------------------------------------------------------------------------
// 15. TASKS VIEW RENDERING
// ----------------------------------------------------------------------------
function renderTasksView() {
  const container = document.getElementById('tasksContainer');
  if (!container) return;
  container.innerHTML = '';
  
  let filtered = [...AppState.tasks];
  
  // Search
  if (AppState.taskFilters.search) {
    const q = AppState.taskFilters.search.toLowerCase();
    filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(q) ||
      (t.description && t.description.toLowerCase().includes(q)) ||
      (t.category && t.category.toLowerCase().includes(q))
    );
  }
  
  // Status Filter
  if (AppState.taskFilters.status === 'Overdue') {
    filtered = filtered.filter(t => isDateOverdue(t.dueDate, t.status));
  } else if (AppState.taskFilters.status !== 'all') {
    filtered = filtered.filter(t => t.status === AppState.taskFilters.status);
  }
  
  // Priority Filter
  if (AppState.taskFilters.priority !== 'all') {
    filtered = filtered.filter(t => t.priority === AppState.taskFilters.priority);
  }
  
  // Category Filter
  if (AppState.taskFilters.category !== 'all') {
    filtered = filtered.filter(t => t.category === AppState.taskFilters.category);
  }
  
  // Project Filter
  if (AppState.taskFilters.project !== 'all') {
    filtered = filtered.filter(t => t.projectId === AppState.taskFilters.project);
  }
  
  // Sorting
  switch (AppState.taskFilters.sortBy) {
    case 'dueDateAsc':
      filtered.sort((a, b) => (a.dueDate || '').localeCompare(b.dueDate || ''));
      break;
    case 'dueDateDesc':
      filtered.sort((a, b) => (b.dueDate || '').localeCompare(a.dueDate || ''));
      break;
    case 'priorityHigh': {
      const pWeights = { High: 3, Medium: 2, Low: 1 };
      filtered.sort((a, b) => (pWeights[b.priority] || 0) - (pWeights[a.priority] || 0));
      break;
    }
    case 'titleAsc':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'createdDesc':
      filtered.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      break;
  }
  
  // View mode
  if (AppState.taskFilters.viewMode === 'list') {
    container.className = 'tasks-display-area list-view';
  } else {
    container.className = 'tasks-display-area';
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box glass-card">
        <div class="empty-state-icon">📋</div>
        <h3>Wax Hawlo ah Lama Helin</h3>
        <p>Ma jiraan hawlo buuxinaya filtarka aad dooratay ama raadintaada.</p>
        <button class="btn btn-primary" onclick="openTaskModal()">+ Ku dar Task Cusub</button>
      </div>
    `;
    return;
  }
  
  filtered.forEach(task => {
    const isCompleted = task.status === 'Completed';
    const overdue = isDateOverdue(task.dueDate, task.status);
    const today = isDateToday(task.dueDate);
    const project = AppState.projects.find(p => p.id === task.projectId);
    const projectName = project ? project.title : 'Mashruuc Guud';
    
    const card = document.createElement('div');
    card.className = `task-card glass-card ${isCompleted ? 'is-completed' : ''}`;
    card.setAttribute('data-tilt', '');
    
    card.innerHTML = `
      <div class="task-top-row">
        <button class="task-check-btn" title="${isCompleted ? 'Dib u fur hawsha' : 'Calaamadee inuu dhammaaday'}" onclick="toggleTaskCompletion('${task.id}')">
          ${isCompleted ? '✓' : ''}
        </button>
        <div class="task-main-info">
          <span class="task-project-tag">📁 ${escapeHtml(projectName)}</span>
          <h4 class="task-title-text">${escapeHtml(task.title)}</h4>
          <p class="task-desc-text">${escapeHtml(task.description || 'Ma jirto sharaxaad dheeraad ah.')}</p>
        </div>
      </div>
      
      <div class="task-badges-row">
        <span class="proj-category-pill">${escapeHtml(task.category)}</span>
        <span class="task-priority-pill priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
        <span class="task-status-pill status-${task.status.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(task.status)}</span>
        <span class="task-date-badge ${overdue ? 'overdue' : (today ? 'today' : '')}">
          ⏰ ${formatDate(task.dueDate)} ${overdue ? '(Overdue!)' : (today ? '(Today!)' : '')}
        </span>
      </div>
      
      <div class="task-bottom-actions">
        <button class="btn btn-sm btn-ghost" onclick="openTaskDetailModal('${task.id}')">Faahfaahin &rarr;</button>
        <div class="proj-action-group">
          <button class="btn-icon header-tool-btn" style="width:32px; height:32px;" title="Wax Ka Beddel" onclick="openTaskModal('${task.id}')">
            <span>✏️</span>
          </button>
          <button class="btn-icon header-tool-btn" style="width:32px; height:32px;" title="Tirtir" onclick="requestDeleteTask('${task.id}')">
            <span>🗑️</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function populateTaskFiltersDropdowns() {
  // Category dropdown
  const catSelect = document.getElementById('taskCategoryFilter');
  if (catSelect) {
    const curVal = catSelect.value;
    catSelect.innerHTML = '<option value="all">Qaybta: Dhammaan</option>';
    const cats = Array.from(new Set(AppState.tasks.map(t => t.category).filter(Boolean)));
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      catSelect.appendChild(opt);
    });
    catSelect.value = curVal;
  }
  
  // Project dropdown
  const projSelect = document.getElementById('taskProjectFilter');
  if (projSelect) {
    const curVal = projSelect.value;
    projSelect.innerHTML = '<option value="all">Mashruuca: Dhammaan</option>';
    AppState.projects.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.title;
      projSelect.appendChild(opt);
    });
    projSelect.value = curVal;
  }
}

// ----------------------------------------------------------------------------
// 16. CANVAS 2D/3D CHART ENGINE (ZERO CDN DEPENDENCIES)
// ----------------------------------------------------------------------------

function setupCanvasDPI(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width || canvas.width || 380;
  const height = rect.height || canvas.height || 220;
  
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  return { ctx, width, height };
}

/** DRAW DONUT CHART WITH GLOWING SEGMENTS & CENTER TEXT */
function drawDonutChart(canvasId, items, centerText = '') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvasDPI(canvas);
  
  ctx.clearRect(0, 0, width, height);
  
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadius = Math.min(centerX, centerY) - 18;
  const innerRadius = outerRadius * 0.65;
  
  if (total === 0) {
    // Empty state circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.arc(centerX, centerY, innerRadius, Math.PI * 2, 0, true);
    ctx.fillStyle = 'rgba(255, 64, 129, 0.12)';
    ctx.fill();
    
    ctx.fillStyle = '#a18ca3';
    ctx.font = '700 13px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Xog ma jirto', centerX, centerY);
    return;
  }
  
  let currentAngle = -Math.PI / 2;
  
  items.forEach(item => {
    if (item.value === 0) return;
    const sliceAngle = (item.value / total) * Math.PI * 2;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
    ctx.closePath();
    
    ctx.fillStyle = item.color;
    ctx.shadowColor = item.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
    
    currentAngle += sliceAngle;
  });
  
  // Center Cutout Text
  ctx.fillStyle = AppState.settings.theme === 'dark' ? '#fdf2f6' : '#2e1a2f';
  ctx.font = '800 20px Plus Jakarta Sans, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(centerText, centerX, centerY - 2);
  
  ctx.fillStyle = '#a18ca3';
  ctx.font = '700 10px Plus Jakarta Sans, sans-serif';
  ctx.fillText('Guud ahaan', centerX, centerY + 16);
}

/** DRAW HORIZONTAL BAR CHART */
function drawHorizontalBarChart(canvasId, items) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvasDPI(canvas);
  
  ctx.clearRect(0, 0, width, height);
  
  if (items.length === 0) {
    ctx.fillStyle = '#a18ca3';
    ctx.font = '700 13px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Xog ma jirto', width / 2, height / 2);
    return;
  }
  
  const paddingLeft = 110;
  const paddingRight = 45;
  const barHeight = 18;
  const rowHeight = Math.min((height - 20) / items.length, 38);
  const maxBarWidth = width - paddingLeft - paddingRight;
  
  items.forEach((item, i) => {
    const y = 16 + i * rowHeight;
    
    // Label
    ctx.fillStyle = AppState.settings.theme === 'dark' ? '#cfbad4' : '#715873';
    ctx.font = '600 11px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    let label = item.label;
    if (label.length > 14) label = label.substring(0, 13) + '..';
    ctx.fillText(label, paddingLeft - 10, y + barHeight / 2);
    
    // Background bar
    ctx.beginPath();
    ctx.roundRect(paddingLeft, y, maxBarWidth, barHeight, 6);
    ctx.fillStyle = 'rgba(255, 64, 129, 0.1)';
    ctx.fill();
    
    // Progress fill
    const fillWidth = Math.max((item.value / 100) * maxBarWidth, 4);
    ctx.beginPath();
    ctx.roundRect(paddingLeft, y, fillWidth, barHeight, 6);
    
    const grad = ctx.createLinearGradient(paddingLeft, 0, paddingLeft + fillWidth, 0);
    grad.addColorStop(0, '#ff4081');
    grad.addColorStop(1, '#a855f7');
    ctx.fillStyle = grad;
    ctx.fill();
    
    // Percentage Value Text
    ctx.fillStyle = AppState.settings.theme === 'dark' ? '#fdf2f6' : '#2e1a2f';
    ctx.font = '700 11px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${item.value}%`, paddingLeft + fillWidth + 6, y + barHeight / 2);
  });
}

/** DRAW VERTICAL BAR CHART */
function drawVerticalBarChart(canvasId, items) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const { ctx, width, height } = setupCanvasDPI(canvas);
  
  ctx.clearRect(0, 0, width, height);
  
  const paddingBottom = 26;
  const paddingTop = 24;
  const paddingLeft = 30;
  const paddingRight = 20;
  
  const chartHeight = height - paddingBottom - paddingTop;
  const chartWidth = width - paddingLeft - paddingRight;
  
  const maxValue = Math.max(...items.map(i => i.value), 4);
  const barWidth = Math.min((chartWidth / items.length) * 0.55, 32);
  const colWidth = chartWidth / items.length;
  
  items.forEach((item, i) => {
    const x = paddingLeft + i * colWidth + (colWidth - barWidth) / 2;
    const barHeightVal = (item.value / maxValue) * chartHeight;
    const y = height - paddingBottom - barHeightVal;
    
    // Bar
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, Math.max(barHeightVal, 4), [6, 6, 0, 0]);
    
    const grad = ctx.createLinearGradient(0, y, 0, y + barHeightVal);
    grad.addColorStop(0, '#ff4081');
    grad.addColorStop(1, '#f472b6');
    ctx.fillStyle = grad;
    ctx.fill();
    
    // Value on top
    ctx.fillStyle = AppState.settings.theme === 'dark' ? '#fdf2f6' : '#2e1a2f';
    ctx.font = '700 10px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(item.value, x + barWidth / 2, y - 6);
    
    // X label
    ctx.fillStyle = '#a18ca3';
    ctx.font = '600 10px Plus Jakarta Sans, sans-serif';
    ctx.fillText(item.label, x + barWidth / 2, height - 8);
  });
}

function renderAllCharts() {
  const m = calculateMetrics();
  
  // 1. Dashboard Status Donut Chart
  const todoCount = AppState.tasks.filter(t => t.status === 'To Do').length;
  const inProgressCount = AppState.tasks.filter(t => t.status === 'In Progress').length;
  const completedCount = m.completedTasks;
  
  document.getElementById('dashboardChartTotalBadge').textContent = `${m.totalTasks} Hawlood`;
  
  const statusItems = [
    { label: 'Completed', value: completedCount, color: '#10b981' },
    { label: 'In Progress', value: inProgressCount, color: '#0ea5e9' },
    { label: 'To Do', value: todoCount, color: '#ff4081' },
  ];
  
  drawDonutChart('dashboardStatusChart', statusItems, `${m.overallRate}%`);
  
  // Custom legend on Dashboard
  const legendElem = document.getElementById('dashStatusLegend');
  if (legendElem) {
    legendElem.innerHTML = statusItems.map(item => `
      <div class="legend-pill">
        <span class="legend-color-dot" style="background:${item.color};"></span>
        <span>${item.label}: <strong>${item.value}</strong></span>
      </div>
    `).join('');
  }
  
  // 2. Statistics View: Completed vs Pending Donut
  const pendingVsCompleted = [
    { label: 'Dhammaaday', value: completedCount, color: '#10b981' },
    { label: 'Kuwa Harsan', value: m.pendingTasks, color: '#ff4081' },
  ];
  drawDonutChart('chartCompletedVsPending', pendingVsCompleted, `${completedCount}/${m.totalTasks}`);
  
  const statLeg = document.getElementById('legendCompletedVsPending');
  if (statLeg) {
    statLeg.innerHTML = pendingVsCompleted.map(it => `
      <div class="legend-pill">
        <span class="legend-color-dot" style="background:${it.color};"></span>
        <span>${it.label}: <strong>${it.value}</strong></span>
      </div>
    `).join('');
  }
  
  // 3. Statistics View: Project Progress Horizontal Bar
  const projItems = AppState.projects.map(p => {
    const pTasks = AppState.tasks.filter(t => t.projectId === p.id);
    const c = pTasks.filter(t => t.status === 'Completed').length;
    const rate = pTasks.length > 0 ? Math.round((c / pTasks.length) * 100) : 0;
    return { label: p.title, value: rate };
  });
  drawHorizontalBarChart('chartProjectProgress', projItems);
  
  // 4. Statistics View: Weekly Task Distribution
  const daysOfWeek = ['Axad', 'Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimce', 'Sabti'];
  const dayCounts = [0, 0, 0, 0, 0, 0, 0];
  
  AppState.tasks.forEach(t => {
    if (t.dueDate) {
      const d = new Date(t.dueDate);
      if (!isNaN(d.getDay())) {
        dayCounts[d.getDay()]++;
      }
    }
  });
  
  const weeklyItems = daysOfWeek.map((day, idx) => ({
    label: day.substring(0, 3),
    value: dayCounts[idx],
  }));
  drawVerticalBarChart('chartWeeklyDistribution', weeklyItems);
  
  // 5. Statistics View: Tasks by Category
  const catMap = {};
  AppState.tasks.forEach(t => {
    const c = t.category || 'General';
    catMap[c] = (catMap[c] || 0) + 1;
  });
  
  const colors = ['#ff4081', '#a855f7', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];
  const categoryItems = Object.keys(catMap).map((cat, i) => ({
    label: cat,
    value: catMap[cat],
    color: colors[i % colors.length],
  }));
  
  drawDonutChart('chartCategoryBreakdown', categoryItems, `${Object.keys(catMap).length} Qaybood`);
  
  const catLegend = document.getElementById('legendCategoryBreakdown');
  if (catLegend) {
    catLegend.innerHTML = categoryItems.map(c => `
      <div class="legend-pill">
        <span class="legend-color-dot" style="background:${c.color};"></span>
        <span>${c.label}: <strong>${c.value}</strong></span>
      </div>
    `).join('');
  }
}

// ----------------------------------------------------------------------------
// 17. INTERACTIVE MONTHLY CALENDAR
// ----------------------------------------------------------------------------
function renderCalendar() {
  const grid = document.getElementById('calendarDaysGrid');
  const title = document.getElementById('calendarMonthYearTitle');
  if (!grid || !title) return;
  grid.innerHTML = '';
  
  const year = AppState.calendarViewingYear;
  const month = AppState.calendarViewingMonth;
  
  const monthNames = [
    'Jannaayo', 'Febraayo', 'Maarso', 'Abriil', 'Maajo', 'Juun',
    'Luuliyo', 'Ogosto', 'Sebtembar', 'Oktoobar', 'Nofembar', 'Diseembar'
  ];
  title.textContent = `${monthNames[month]} ${year}`;
  
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  
  const todayStr = getTodayString();
  const selectedStr = AppState.selectedCalendarDate.toISOString().split('T')[0];
  
  // Previous month overflow days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const dayNum = prevMonthDays - i;
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell other-month';
    cell.innerHTML = `<span class="cal-day-num">${dayNum}</span>`;
    grid.appendChild(cell);
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isToday = currentDayStr === todayStr;
    const isSelected = currentDayStr === selectedStr;
    
    // Find tasks for this day
    const dayTasks = AppState.tasks.filter(t => t.dueDate === currentDayStr);
    
    const cell = document.createElement('div');
    cell.className = `cal-day-cell ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''}`;
    
    let dotsHtml = '';
    if (dayTasks.length > 0) {
      dotsHtml = `<div class="cal-task-dots-row">` +
        dayTasks.slice(0, 4).map(t => {
          let dotType = t.priority.toLowerCase();
          if (t.status === 'Completed') dotType = 'completed';
          return `<span class="cal-task-dot ${dotType}" title="${escapeHtml(t.title)}"></span>`;
        }).join('') +
        `</div>`;
    }
    
    cell.innerHTML = `
      <span class="cal-day-num">${day}</span>
      ${dotsHtml}
    `;
    
    cell.onclick = () => {
      AppState.selectedCalendarDate = new Date(year, month, day);
      renderCalendar();
      renderSelectedDayTasks(currentDayStr);
    };
    
    grid.appendChild(cell);
  }
  
  renderSelectedDayTasks(selectedStr);
  renderCalendarOverdueList();
}

function renderSelectedDayTasks(dateStr) {
  const container = document.getElementById('calSelectedDayTasksList');
  const titleElem = document.getElementById('calSelectedDateTitle');
  const descElem = document.getElementById('calSelectedDateDesc');
  if (!container) return;
  container.innerHTML = '';
  
  titleElem.textContent = `Hawlaha: ${formatDate(dateStr)}`;
  
  const tasksForDay = AppState.tasks.filter(t => t.dueDate === dateStr);
  
  if (tasksForDay.length === 0) {
    descElem.textContent = 'Ma jiraan hawlo maanta ku beegan.';
    container.innerHTML = `
      <div style="text-align:center; padding:18px; color:var(--text-muted); font-size:0.85rem;">
        Ma jiraan hawlo ku aaddan taariikhdan ♡
      </div>
    `;
    return;
  }
  
  descElem.textContent = `${tasksForDay.length} hawlood ayaa ku aaddan maalintan.`;
  
  tasksForDay.forEach(task => {
    const isCompleted = task.status === 'Completed';
    const card = document.createElement('div');
    card.className = `deadline-card ${isCompleted ? '' : (isDateOverdue(task.dueDate, task.status) ? 'overdue' : 'today')}`;
    card.style.cursor = 'pointer';
    card.onclick = () => openTaskDetailModal(task.id);
    
    card.innerHTML = `
      <div class="dl-info">
        <h5>${escapeHtml(task.title)}</h5>
        <p>${escapeHtml(task.category)} &bull; ${escapeHtml(task.status)}</p>
      </div>
      <span class="task-priority-pill priority-${task.priority.toLowerCase()}">${escapeHtml(task.priority)}</span>
    `;
    container.appendChild(card);
  });
}

function renderCalendarOverdueList() {
  const container = document.getElementById('calOverdueList');
  const countBadge = document.getElementById('calOverdueCount');
  if (!container) return;
  container.innerHTML = '';
  
  const overdueTasks = AppState.tasks.filter(t => isDateOverdue(t.dueDate, t.status));
  if (countBadge) countBadge.textContent = overdueTasks.length;
  
  if (overdueTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:14px; color:var(--text-muted); font-size:0.82rem;">
        🎉 Ma jiraan hawlo waqtigoodu dhacay! Aad baad u fiican tahay.
      </div>
    `;
    return;
  }
  
  overdueTasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'deadline-card overdue';
    card.style.cursor = 'pointer';
    card.onclick = () => openTaskDetailModal(task.id);
    
    card.innerHTML = `
      <div class="dl-info">
        <h5>${escapeHtml(task.title)}</h5>
        <p>Due: ${formatDate(task.dueDate)} &bull; ${escapeHtml(task.priority)}</p>
      </div>
      <button class="btn btn-sm btn-ghost" style="color:var(--color-danger);" onclick="event.stopPropagation(); toggleTaskCompletion('${task.id}')">Dhamee ✓</button>
    `;
    container.appendChild(card);
  });
}

// ----------------------------------------------------------------------------
// 18. REPORTS & PRINT EXPORT ENGINE
// ----------------------------------------------------------------------------
function renderAcademicReport() {
  const m = calculateMetrics();
  
  document.getElementById('reportGeneratedDate').textContent = formatDate(new Date().toISOString());
  document.getElementById('repTotalProjects').textContent = m.totalProjects;
  document.getElementById('repTotalTasks').textContent = m.totalTasks;
  document.getElementById('repCompletedTasks').textContent = m.completedTasks;
  document.getElementById('repPendingTasks').textContent = m.pendingTasks;
  document.getElementById('repOverallRate').textContent = `${m.overallRate}%`;
  
  // Projects Table
  const projTbody = document.getElementById('reportProjectsTableBody');
  if (projTbody) {
    projTbody.innerHTML = AppState.projects.map(proj => {
      const pTasks = AppState.tasks.filter(t => t.projectId === proj.id);
      const c = pTasks.filter(t => t.status === 'Completed').length;
      const rate = pTasks.length > 0 ? Math.round((c / pTasks.length) * 100) : 0;
      return `
        <tr>
          <td><strong>${escapeHtml(proj.title)}</strong></td>
          <td>${escapeHtml(proj.category)}</td>
          <td>${formatDate(proj.dueDate)}</td>
          <td>${pTasks.length}</td>
          <td>${c}</td>
          <td><strong>${rate}%</strong></td>
          <td><span class="proj-status-pill proj-status-${proj.status.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(proj.status)}</span></td>
        </tr>
      `;
    }).join('');
  }
  
  // Tasks Table
  const tasksTbody = document.getElementById('reportTasksTableBody');
  if (tasksTbody) {
    tasksTbody.innerHTML = AppState.tasks.map(t => {
      const p = AppState.projects.find(proj => proj.id === t.projectId);
      return `
        <tr>
          <td>${escapeHtml(t.title)}</td>
          <td>${escapeHtml(p ? p.title : '-')}</td>
          <td>${escapeHtml(t.category)}</td>
          <td><span class="task-priority-pill priority-${t.priority.toLowerCase()}">${escapeHtml(t.priority)}</span></td>
          <td>${formatDate(t.dueDate)}</td>
          <td><span class="task-status-pill status-${t.status.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(t.status)}</span></td>
        </tr>
      `;
    }).join('');
  }
}

function exportTasksToCSV() {
  if (AppState.tasks.length === 0) {
    showToast('Ma jiraan hawlo la soo dejiyo!', 'warning');
    return;
  }
  
  const headers = ['ID', 'Task Title', 'Project', 'Category', 'Priority', 'Status', 'Due Date'];
  const rows = AppState.tasks.map(t => {
    const p = AppState.projects.find(proj => proj.id === t.projectId);
    return [
      t.id,
      `"${(t.title || '').replace(/"/g, '""')}"`,
      `"${(p ? p.title : '').replace(/"/g, '""')}"`,
      `"${(t.category || '').replace(/"/g, '""')}"`,
      t.priority,
      t.status,
      t.dueDate,
    ];
  });
  
  const csvContent = 'data:text/csv;charset=utf-8,' +
    [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Maryama_Tasks_Report_${getTodayString()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('Warbixinta CSV si guul leh ayaa loo soo dejiyey! 📊', 'success');
}

function exportFullJSONBackup() {
  const backup = {
    appName: 'Maryama Pink Dashboard',
    exportDate: new Date().toISOString(),
    profile: AppState.settings,
    projects: AppState.projects,
    tasks: AppState.tasks,
    activities: AppState.activities,
  };
  
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backup, null, 2));
  const link = document.createElement('a');
  link.setAttribute('href', dataStr);
  link.setAttribute('download', `Maryama_Dashboard_Backup_${getTodayString()}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast('Nuqulka Backup (JSON) waa la soo dejiyey! 💾', 'success');
}

function handleImportJSONFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (!data.projects || !data.tasks) {
        throw new Error('Qaab-dhismeedka faylku ma saxna.');
      }
      
      AppState.projects = data.projects;
      AppState.tasks = data.tasks;
      if (data.activities) AppState.activities = data.activities;
      if (data.profile) AppState.settings = { ...AppState.settings, ...data.profile };
      
      saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
      saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
      
      showToast('Xogta Backup-ka si guul leh ayaa loo soo geliyey! ✨', 'success');
      SoundFX.playSuccess();
      refreshAllViews();
    } catch (err) {
      console.error(err);
      showToast('Faylka lama aqrin karin! Hubi inuu yahay JSON sax ah.', 'error');
    }
  };
  reader.readAsText(file);
}

// ----------------------------------------------------------------------------
// 19. THEME & SETTINGS ENGINE
// ----------------------------------------------------------------------------
function applyTheme(theme) {
  AppState.settings.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
  
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  // Re-render canvas charts for color contrast
  setTimeout(() => renderAllCharts(), 50);
}

function toggleTheme() {
  const newTheme = AppState.settings.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  SoundFX.playClick();
  showToast(`Waxaad u beddeshay: ${newTheme === 'dark' ? 'Rose Dark Mode 🌙' : 'Pink Light Mode 🌸'}`, 'info');
}

function updateProfileUI() {
  const name = AppState.settings.profileName || 'Maryama Mohamed';
  const role = AppState.settings.profileRole || 'Faculty of Computer Science & IT';
  
  document.getElementById('topWelcomeHeading').textContent = `Hello, ${name.split(' ')[0]}! ♡`;
  document.getElementById('sideProfileName').textContent = name;
  document.getElementById('sideProfileRole').textContent = role;
  document.getElementById('dashStudentName').textContent = name;
  document.getElementById('dashStudentDept').textContent = role;
  document.getElementById('reportStudentName').textContent = name;
  document.getElementById('reportStudentDept').textContent = role;
  
  // Settings form fields
  const inpName = document.getElementById('inputProfileName');
  if (inpName) inpName.value = name;
  const inpRole = document.getElementById('inputProfileRole');
  if (inpRole) inpRole.value = role;
  const inpEmail = document.getElementById('inputProfileEmail');
  if (inpEmail) inpEmail.value = AppState.settings.profileEmail || '';
}

function handleSaveProfileSettings(e) {
  e.preventDefault();
  const name = document.getElementById('inputProfileName').value.trim();
  const role = document.getElementById('inputProfileRole').value.trim();
  const email = document.getElementById('inputProfileEmail').value.trim();
  
  if (!name) {
    showToast('Fadlan geli magacaaga!', 'warning');
    return;
  }
  
  AppState.settings.profileName = name;
  AppState.settings.profileRole = role;
  AppState.settings.profileEmail = email;
  saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
  
  updateProfileUI();
  SoundFX.playSuccess();
  showToast('Xogta Profile-ka si guul leh ayaa loo kaydiyey! ✨', 'success');
}

function resetToSampleDemoData() {
  openConfirmModal(
    'Ku Celi Xogtii Tusaalaha',
    'Ma hubtaa inaad dib ugu celiso xogtii tusaalaha ahayd ee Maryama Pink Dashboard?',
    () => {
      AppState.projects = [...INITIAL_DEMO_DATA.projects];
      AppState.tasks = [...INITIAL_DEMO_DATA.tasks];
      AppState.activities = [...INITIAL_DEMO_DATA.activities];
      AppState.settings = { ...INITIAL_DEMO_DATA.settings };
      
      saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
      saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
      
      applyTheme(AppState.settings.theme);
      updateProfileUI();
      refreshAllViews();
      SoundFX.playSuccess();
      showToast('Xogtii tusaalaha ahayd waa la soo celiyey! 🔄', 'success');
    }
  );
}

function clearAllAppData() {
  openConfirmModal(
    'Nadiifi Dhammaan Xogta',
    'DIGNIIN: Tallaabadani waxay tirtiraysaa dhammaan mashaariicda iyo hawlahaaga LocalStorage. Ma hubtaa?',
    () => {
      AppState.projects = [];
      AppState.tasks = [];
      AppState.activities = [];
      
      saveToStorage(STORAGE_KEYS.PROJECTS, AppState.projects);
      saveToStorage(STORAGE_KEYS.TASKS, AppState.tasks);
      saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
      
      refreshAllViews();
      SoundFX.playAlert();
      showToast('Dhammaan xogtii LocalStorage waa la nadiifiyey!', 'info');
    }
  );
}

// ----------------------------------------------------------------------------
// 20. VIEW ROUTING & SWITCHING
// ----------------------------------------------------------------------------
function switchView(viewName) {
  AppState.currentView = viewName;
  
  // Update sidebar links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-view') === viewName);
  });
  
  // Show active view section
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.toggle('active', view.id === `view-${viewName}`);
  });
  
  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile sidebar if open
  closeMobileSidebar();
  
  // Render specific view data
  switch (viewName) {
    case 'dashboard':
      updateDashboardMetrics();
      renderDashboardProjects();
      renderDashboardDeadlines();
      renderDashboardActivities();
      renderAllCharts();
      break;
    case 'projects':
      populateProjectCategoryFilter();
      renderProjectsView();
      break;
    case 'tasks':
      populateTaskFiltersDropdowns();
      renderTasksView();
      break;
    case 'statistics':
      renderAllCharts();
      break;
    case 'calendar':
      renderCalendar();
      break;
    case 'reports':
      renderAcademicReport();
      break;
    case 'settings':
      updateProfileUI();
      break;
  }
}

function refreshAllViews() {
  updateDashboardMetrics();
  renderDashboardProjects();
  renderDashboardDeadlines();
  renderDashboardActivities();
  renderNotificationsDropdown();
  
  populateProjectCategoryFilter();
  renderProjectsView();
  
  populateTaskFiltersDropdowns();
  renderTasksView();
  
  renderAllCharts();
  renderCalendar();
  renderAcademicReport();
}

// Mobile sidebar controls
function openMobileSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('open');
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
}

// ----------------------------------------------------------------------------
// 21. EVENT LISTENERS INITIALIZATION
// ----------------------------------------------------------------------------
function setupEventListeners() {
  // Navigation Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const view = link.getAttribute('data-view');
      SoundFX.playClick();
      switchView(view);
    });
  });
  
  // Hero Buttons
  document.getElementById('heroNewTaskBtn')?.addEventListener('click', () => openTaskModal());
  document.getElementById('heroNewProjectBtn')?.addEventListener('click', () => openProjectModal());
  document.getElementById('heroViewCalendarBtn')?.addEventListener('click', () => switchView('calendar'));
  document.getElementById('dashViewAllProjectsBtn')?.addEventListener('click', () => switchView('projects'));
  
  // Quick Shortcuts
  document.getElementById('quickAddTaskBtn')?.addEventListener('click', () => openTaskModal());
  document.getElementById('qaNewTask')?.addEventListener('click', () => openTaskModal());
  document.getElementById('qaNewProject')?.addEventListener('click', () => openProjectModal());
  document.getElementById('qaViewCalendar')?.addEventListener('click', () => switchView('calendar'));
  document.getElementById('qaGenerateReport')?.addEventListener('click', () => switchView('reports'));
  
  // Header Tool Buttons
  document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);
  
  document.getElementById('soundToggleBtn')?.addEventListener('click', () => {
    AppState.settings.soundEnabled = !AppState.settings.soundEnabled;
    saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) soundIcon.textContent = AppState.settings.soundEnabled ? '🔊' : '🔇';
    const settingsToggle = document.getElementById('settingsSoundToggle');
    if (settingsToggle) settingsToggle.checked = AppState.settings.soundEnabled;
    showToast(`Codka waa: ${AppState.settings.soundEnabled ? 'Shidan 🔊' : 'Damsan 🔇'}`, 'info');
  });
  
  document.getElementById('notifBellBtn')?.addEventListener('click', () => {
    document.getElementById('notificationsMenu')?.classList.toggle('open');
  });
  
  document.getElementById('clearNotifsBtn')?.addEventListener('click', () => {
    document.getElementById('notificationsMenu')?.classList.remove('open');
  });
  
  // Close notifs dropdown on outside click
  document.addEventListener('click', (e) => {
    const notifWrapper = document.querySelector('.notification-dropdown-wrapper');
    if (notifWrapper && !notifWrapper.contains(e.target)) {
      document.getElementById('notificationsMenu')?.classList.remove('open');
    }
  });
  
  // Global Search Input
  const globalSearch = document.getElementById('globalSearchInput');
  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      const q = e.target.value;
      AppState.taskFilters.search = q;
      AppState.projectFilters.search = q;
      if (AppState.currentView !== 'tasks' && AppState.currentView !== 'projects') {
        switchView('tasks');
      } else {
        renderTasksView();
        renderProjectsView();
      }
    });
  }
  
  // Keyboard Shortcut ⌘K / Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      document.getElementById('globalSearchInput')?.focus();
    }
  });
  
  // Mobile Sidebar
  document.getElementById('sidebarOpenBtn')?.addEventListener('click', openMobileSidebar);
  document.getElementById('sidebarCloseBtn')?.addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebarBackdrop')?.addEventListener('click', closeMobileSidebar);
  
  // Activity Feed Clear
  document.getElementById('clearActivitiesBtn')?.addEventListener('click', () => {
    AppState.activities = [];
    saveToStorage(STORAGE_KEYS.ACTIVITIES, AppState.activities);
    renderDashboardActivities();
    showToast('Activity log-ga waa la nadiifiyey.', 'info');
  });
  
  // Project View Events
  document.getElementById('openNewProjectModalBtn')?.addEventListener('click', () => openProjectModal());
  document.getElementById('closeProjectModalBtn')?.addEventListener('click', closeProjectModal);
  document.getElementById('cancelProjectModalBtn')?.addEventListener('click', closeProjectModal);
  document.getElementById('projectForm')?.addEventListener('submit', handleSaveProject);
  
  document.getElementById('projectSearchInput')?.addEventListener('input', (e) => {
    AppState.projectFilters.search = e.target.value;
    renderProjectsView();
  });
  
  document.getElementById('projectStatusFilter')?.addEventListener('change', (e) => {
    AppState.projectFilters.status = e.target.value;
    renderProjectsView();
  });
  
  document.getElementById('projectCategoryFilter')?.addEventListener('change', (e) => {
    AppState.projectFilters.category = e.target.value;
    renderProjectsView();
  });
  
  document.getElementById('projectGridViewBtn')?.addEventListener('click', () => {
    AppState.projectFilters.viewMode = 'grid';
    document.getElementById('projectGridViewBtn').classList.add('active');
    document.getElementById('projectListViewBtn').classList.remove('active');
    renderProjectsView();
  });
  
  document.getElementById('projectListViewBtn')?.addEventListener('click', () => {
    AppState.projectFilters.viewMode = 'list';
    document.getElementById('projectListViewBtn').classList.add('active');
    document.getElementById('projectGridViewBtn').classList.remove('active');
    renderProjectsView();
  });
  
  // Task View Events
  document.getElementById('openNewTaskModalBtn')?.addEventListener('click', () => openTaskModal());
  document.getElementById('closeTaskModalBtn')?.addEventListener('click', closeTaskModal);
  document.getElementById('cancelTaskModalBtn')?.addEventListener('click', closeTaskModal);
  document.getElementById('taskForm')?.addEventListener('submit', handleSaveTask);
  
  document.getElementById('taskSearchInput')?.addEventListener('input', (e) => {
    AppState.taskFilters.search = e.target.value;
    renderTasksView();
  });
  
  document.getElementById('taskStatusFilter')?.addEventListener('change', (e) => {
    AppState.taskFilters.status = e.target.value;
    // sync tabs
    document.querySelectorAll('.task-quick-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-status') === e.target.value);
    });
    renderTasksView();
  });
  
  document.getElementById('taskPriorityFilter')?.addEventListener('change', (e) => {
    AppState.taskFilters.priority = e.target.value;
    renderTasksView();
  });
  
  document.getElementById('taskCategoryFilter')?.addEventListener('change', (e) => {
    AppState.taskFilters.category = e.target.value;
    renderTasksView();
  });
  
  document.getElementById('taskProjectFilter')?.addEventListener('change', (e) => {
    AppState.taskFilters.project = e.target.value;
    renderTasksView();
  });
  
  document.getElementById('taskSortSelect')?.addEventListener('change', (e) => {
    AppState.taskFilters.sortBy = e.target.value;
    renderTasksView();
  });
  
  document.getElementById('resetTaskFiltersBtn')?.addEventListener('click', () => {
    AppState.taskFilters.search = '';
    AppState.taskFilters.status = 'all';
    AppState.taskFilters.priority = 'all';
    AppState.taskFilters.category = 'all';
    AppState.taskFilters.project = 'all';
    AppState.taskFilters.sortBy = 'dueDateAsc';
    
    document.getElementById('taskSearchInput').value = '';
    document.getElementById('taskStatusFilter').value = 'all';
    document.getElementById('taskPriorityFilter').value = 'all';
    document.getElementById('taskCategoryFilter').value = 'all';
    document.getElementById('taskProjectFilter').value = 'all';
    document.getElementById('taskSortSelect').value = 'dueDateAsc';
    
    document.querySelectorAll('.task-quick-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-status') === 'all');
    });
    
    renderTasksView();
    showToast('Dhammaan filtarradii hawlaha waa la dib-u-dejiyey.', 'info');
  });
  
  // Task Quick Status Tabs
  document.querySelectorAll('.task-quick-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.task-quick-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const st = tab.getAttribute('data-status');
      AppState.taskFilters.status = st;
      const statusSelect = document.getElementById('taskStatusFilter');
      if (statusSelect && statusSelect.querySelector(`option[value="${st}"]`)) {
        statusSelect.value = st;
      }
      renderTasksView();
    });
  });
  
  document.getElementById('taskGridViewBtn')?.addEventListener('click', () => {
    AppState.taskFilters.viewMode = 'grid';
    document.getElementById('taskGridViewBtn').classList.add('active');
    document.getElementById('taskListViewBtn').classList.remove('active');
    renderTasksView();
  });
  
  document.getElementById('taskListViewBtn')?.addEventListener('click', () => {
    AppState.taskFilters.viewMode = 'list';
    document.getElementById('taskListViewBtn').classList.add('active');
    document.getElementById('taskGridViewBtn').classList.remove('active');
    renderTasksView();
  });
  
  // Calendar Navigation
  document.getElementById('calPrevMonthBtn')?.addEventListener('click', () => {
    AppState.calendarViewingMonth--;
    if (AppState.calendarViewingMonth < 0) {
      AppState.calendarViewingMonth = 11;
      AppState.calendarViewingYear--;
    }
    renderCalendar();
  });
  
  document.getElementById('calNextMonthBtn')?.addEventListener('click', () => {
    AppState.calendarViewingMonth++;
    if (AppState.calendarViewingMonth > 11) {
      AppState.calendarViewingMonth = 0;
      AppState.calendarViewingYear++;
    }
    renderCalendar();
  });
  
  document.getElementById('calendarTodayBtn')?.addEventListener('click', () => {
    const today = new Date();
    AppState.calendarViewingMonth = today.getMonth();
    AppState.calendarViewingYear = today.getFullYear();
    AppState.selectedCalendarDate = today;
    renderCalendar();
  });
  
  document.getElementById('calendarAddTaskBtn')?.addEventListener('click', () => {
    const dateStr = AppState.selectedCalendarDate.toISOString().split('T')[0];
    openTaskModal(null, dateStr);
  });
  
  // Reports & Export Buttons
  document.getElementById('printReportBtn')?.addEventListener('click', () => {
    window.print();
  });
  
  document.getElementById('exportCsvBtn')?.addEventListener('click', exportTasksToCSV);
  document.getElementById('exportJsonBtn')?.addEventListener('click', exportFullJSONBackup);
  document.getElementById('exportBackupJsonBtn')?.addEventListener('click', exportFullJSONBackup);
  document.getElementById('importJsonFileInput')?.addEventListener('change', handleImportJSONFile);
  
  // Settings View Events
  document.getElementById('setThemeLight')?.addEventListener('click', () => applyTheme('light'));
  document.getElementById('setThemeDark')?.addEventListener('click', () => applyTheme('dark'));
  
  document.getElementById('settingsSoundToggle')?.addEventListener('change', (e) => {
    AppState.settings.soundEnabled = e.target.checked;
    saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon) soundIcon.textContent = AppState.settings.soundEnabled ? '🔊' : '🔇';
  });
  
  document.getElementById('settingsAnimToggle')?.addEventListener('change', (e) => {
    AppState.settings.animationsEnabled = e.target.checked;
    saveToStorage(STORAGE_KEYS.SETTINGS, AppState.settings);
    const bgScene = document.querySelector('.bg-3d-scene');
    if (bgScene) {
      bgScene.style.display = e.target.checked ? 'block' : 'none';
    }
  });
  
  document.getElementById('profileSettingsForm')?.addEventListener('submit', handleSaveProfileSettings);
  document.getElementById('openProfileSettingsBtn')?.addEventListener('click', () => switchView('settings'));
  document.getElementById('resetSampleDataBtn')?.addEventListener('click', resetToSampleDemoData);
  document.getElementById('clearAllDataBtn')?.addEventListener('click', clearAllAppData);
  
  // Confirm Modal
  document.getElementById('closeConfirmModalBtn')?.addEventListener('click', closeConfirmModal);
  document.getElementById('confirmCancelBtn')?.addEventListener('click', closeConfirmModal);
  document.getElementById('confirmActionBtn')?.addEventListener('click', () => {
    if (typeof AppState.pendingDeleteAction === 'function') {
      AppState.pendingDeleteAction();
    }
    closeConfirmModal();
  });
  
  // Task Details Modal
  document.getElementById('closeTaskDetailModalBtn')?.addEventListener('click', closeTaskDetailModal);
  
  // Window Resize: re-render canvas charts to remain sharp
  window.addEventListener('resize', () => {
    renderAllCharts();
  });
}

// ----------------------------------------------------------------------------
// 22. APPLICATION INITIALIZATION ENTRY POINT
// ----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initializeDataStore();
  setupEventListeners();
  switchView('dashboard');
  
  // Display Current Date in Somali
  const dateDisp = document.getElementById('headerDateDisplay');
  if (dateDisp) {
    const today = new Date();
    const days = ['Axad', 'Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimce', 'Sabti'];
    const months = ['Jannaayo', 'Febraayo', 'Maarso', 'Abriil', 'Maajo', 'Juun', 'Luuliyo', 'Ogosto', 'Sebtembar', 'Oktoobar', 'Nofembar', 'Diseembar'];
    dateDisp.textContent = `Maanta: ${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
  }
  
  console.log('🌸 Maryama Pink Dashboard ♡ si guul leh ayaa loo furay!');
});
