const TASKS_STORAGE_KEY = "tasks";

// Function to get tasks from localStorage
export const getTasks = () => {
  const tasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

// Function to save tasks to localStorage
export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

// Function to add a new task
export const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
};

// Function to update a task
export const updateTask = (index, newText) => {
  const tasks = getTasks();
  if (tasks[index]) {
    tasks[index].text = newText;
    saveTasks(tasks);
  }
  return tasks;
};

// Function to toggle task completion
export const toggleTask = (index) => {
  const tasks = getTasks();
  if (tasks[index]) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
  }
  return tasks;
};

// Function to delete a task
export const deleteTask = (index) => {
  let tasks = getTasks();
  tasks = tasks.filter((_, i) => i !== index);
  saveTasks(tasks);
  return tasks;
};

// Function to move a task up or down
export const moveTask = (index, direction) => {
  const tasks = getTasks();
  if (direction === "up" && index > 0) {
    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
  } else if (direction === "down" && index < tasks.length - 1) {
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
  }
  saveTasks(tasks);
  return tasks;
};
