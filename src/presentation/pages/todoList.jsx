import { useSelector } from "react-redux";
import TaskItem from "../../presentation/components/TaskItem";
import TaskInput from "../../presentation/components/TaskInput";

export default function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);

  return (
    <div className="main-container">
    <div className="container">
    <h1>To-Do List</h1>
    <TaskInput />
    <div className="task-list-container">
      <table>
        <thead>
          <tr>
            <th>isDone</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} index={index} totalTasks={tasks.length} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
  </div>
);
}