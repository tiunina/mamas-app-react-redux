import { createSlice } from "@reduxjs/toolkit";
import { addTask, changeTask, deleteTask, fetchTasks } from "../tasksOps";

const INITIAL_STATE = {
  tasks: [],
  loading: false,
  error: null,
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder //fetch
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) //addTask
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) //deleteTask
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) //changeTask
      .addCase(changeTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        state.tasks.splice(index, 1, action.payload);
      })
      .addCase(changeTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});
export const tasksReducer = tasksSlice.reducer;

export const selectTasks = (state) => state.tasks.tasks;
export const selectLoading = (state) => state.tasks.loading;
export const selectError = (state) => state.tasks.error;
