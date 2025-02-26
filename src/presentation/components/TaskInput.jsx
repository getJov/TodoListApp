import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../application/redux/todoSlice";

export default function TaskInput() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    dispatch(addTask({ text: newTask, completed: false }));
    setNewTask("");
  };

  return (
    <div className="input-area">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="btnAdd" onClick={handleAddTask}>Add</button>
    </div>
  );
}
