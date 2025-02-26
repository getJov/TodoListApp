class TaskRepository {
    static loadTasks() {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    }
  
    static saveTasks(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
  
  export default TaskRepository;
  