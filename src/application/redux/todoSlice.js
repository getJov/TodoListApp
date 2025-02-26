import { createSlice } from "@reduxjs/toolkit";
import * as taskUseCases from "../../domain/usecases/taskUseCases";

const initialState = {
  tasks: taskUseCases.fetchTasks(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = taskUseCases.createTask(action.payload.text);
    },
    editTask: (state, action) => {
      state.tasks = taskUseCases.modifyTask(action.payload.index, action.payload.newText);
    },
    toggleTask: (state, action) => {
      state.tasks = taskUseCases.toggleTaskStatus(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = taskUseCases.removeTask(action.payload);
    },
    moveTaskUp: (state, action) => {
      state.tasks = taskUseCases.moveTaskUp(action.payload);
    },
    moveTaskDown: (state, action) => {
      state.tasks = taskUseCases.moveTaskDown(action.payload);
    },
  },
});

export const { addTask, editTask, toggleTask, deleteTask, moveTaskUp, moveTaskDown } = todoSlice.actions;
export default todoSlice.reducer;
