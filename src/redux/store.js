import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/tasksSlice";
import { filterReducer } from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
