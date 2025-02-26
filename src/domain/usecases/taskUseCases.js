// Add Task
export function addTaskUseCase(tasks, newTask) {
    return [...tasks, newTask];
}
  
// Delete Task
export function deleteTaskUseCase(tasks, index) {
    return tasks.filter((_, i) => i !== index);
}
  
// is Task Complete
export function toggleTaskUseCase(tasks, index) {
    return tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
}
  
// Edit Task
export function editTaskUseCase(tasks, { index, newText }) {
    return tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
}
  
// Move task up
export function moveTaskUpUseCase(tasks, index) {
    if (index <= 0) return tasks; // Can't move the first item up
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    return updatedTasks;
}
  
// Move task down
export function moveTaskDownUseCase(tasks, index) {
    if (index >= tasks.length - 1) return tasks; // Can't move the last item down
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    return updatedTasks;
}