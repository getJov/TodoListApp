import { createSlice } from "@reduxjs/toolkit";
import {
  addTaskUseCase,
  deleteTaskUseCase,
  toggleTaskUseCase,
  editTaskUseCase,
  moveTaskUpUseCase,
  moveTaskDownUseCase,
} from "../../domain/usecases/taskUseCases";
import TaskRepository from "../../infrastructure/repositories/taskRepository";

const initialState = {
  tasks: TaskRepository.loadTasks(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = addTaskUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = deleteTaskUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
    toggleTask: (state, action) => {
      state.tasks = toggleTaskUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
    editTask: (state, action) => {
      state.tasks = editTaskUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
    moveTaskUp: (state, action) => {
      state.tasks = moveTaskUpUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
    moveTaskDown: (state, action) => {
      state.tasks = moveTaskDownUseCase(state.tasks, action.payload);
      TaskRepository.saveTasks(state.tasks);
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask, moveTaskUp, moveTaskDown } = todoSlice.actions;
export default todoSlice.reducer;
