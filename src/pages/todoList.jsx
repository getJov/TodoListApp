import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask, editTask, moveTaskUp, moveTaskDown } from "../redux/todoSlice";
import { useState } from "react";

export default function TodoList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="btnAdd" onClick={handleAddTask}>
          Add
        </button>
      </div>
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
            <tr key={index} className={task.completed ? "completed" : ""}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(index))}
                />
              </td>
              <td className="main-text">
                <span>{task.text}</span>
              </td>
              <td>
                {/* ✅ New Button Group Layout */}
                <div className="button-group">
                  {/* Move Up & Move Down Side by Side */}
                  <div className="move-buttons">
                    <button className="btnMove" onClick={() => dispatch(moveTaskUp(index))}>
                      ⬆
                    </button>
                    <button className="btnMove" onClick={() => dispatch(moveTaskDown(index))}>
                      ⬇
                    </button>
                  </div>
                  {/* Edit Button Below Move Buttons */}
                  <button
                    className="btnEdit"
                    onClick={() => {
                      const newText = prompt("Edit task:", task.text);
                      if (newText) dispatch(editTask({ index, text: newText }));
                    }}
                  >
                    Edit
                  </button>
                  {/* Delete Button Below Edit Button */}
                  <button className="btnDelete" onClick={() => dispatch(deleteTask(index))}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
