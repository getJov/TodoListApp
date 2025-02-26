import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Import the reducer

const store = configureStore({
  reducer: {
    todo: todoReducer, // Register the todo reducer
  },
});

export default store;
