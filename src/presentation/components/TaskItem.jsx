import { useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask, moveTaskUp, moveTaskDown } from "../../application/redux/todoSlice";
import { useState } from "react";

export default function TaskItem({ task, index, totalTasks }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      dispatch(editTask({ index, newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <tr className={task.completed ? "completed" : ""}
        style={{
              // textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.5 : 1,
            }}>
      {/* checkbox */}
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(index))}
        />
      </td>

      {/* Task List */}
      <td>
        <span>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
        ) : (
          task.text
        )}
        </span>
      </td>

      {/* Actions Button */}
      <td className="actions">
        <div className="button-grid">
          <button
            className="btnMove"
            onClick={() => dispatch(moveTaskUp(index))}
            disabled={index === 0}
          >
            ▲
          </button>
          <button className="btnEdit" onClick={handleEdit}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            className="btnMove"
            onClick={() => dispatch(moveTaskDown(index))}
            disabled={index === totalTasks - 1}
          >
            ▼
          </button>
          <button className="btnDelete" onClick={() => dispatch(deleteTask(index))}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
