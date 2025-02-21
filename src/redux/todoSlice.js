import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ text: action.payload, completed: false });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, i) => i !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      state.tasks[action.payload].completed = !state.tasks[action.payload].completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      state.tasks[action.payload.index].text = action.payload.text;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    moveTaskUp: (state, action) => {
      const index = action.payload;
      if (index > 0) {
        [state.tasks[index], state.tasks[index - 1]] = [state.tasks[index - 1], state.tasks[index]];
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    moveTaskDown: (state, action) => {
      const index = action.payload;
      if (index < state.tasks.length - 1) {
        [state.tasks[index], state.tasks[index + 1]] = [state.tasks[index + 1], state.tasks[index]];
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask, moveTaskUp, moveTaskDown } = todoSlice.actions;
export default todoSlice.reducer;
