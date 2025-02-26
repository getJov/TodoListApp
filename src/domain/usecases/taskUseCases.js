import * as taskRepo from "../../data/repositories/taskRepository";

// Business logic to get all tasks
export const fetchTasks = () => {
  return taskRepo.getTasks();
};

// Business logic to add a new task
export const createTask = (text) => {
  const newTask = { text, completed: false };
  return taskRepo.addTask(newTask);
};

// Business logic to edit a task
export const modifyTask = (index, newText) => {
  return taskRepo.updateTask(index, newText);
};

// Business logic to toggle task completion
export const toggleTaskStatus = (index) => {
  return taskRepo.toggleTask(index);
};

// Business logic to delete a task
export const removeTask = (index) => {
  return taskRepo.deleteTask(index);
};

// Business logic to move tasks
export const moveTaskUp = (index) => {
  return taskRepo.moveTask(index, "up");
};

export const moveTaskDown = (index) => {
  return taskRepo.moveTask(index, "down");
};
