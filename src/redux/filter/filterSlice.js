import { createSelector, createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "../constants";
import { selectTasks } from "../tasks/tasksSlice";

const INITIAL_STATE = {
  status: statusFilter.all,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilterStatus: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilterStatus } = filterSlice.actions;
export const selectFilter = (state) => state.filter.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, status) => {
    switch (status) {
      case status.active:
        return tasks.filter((task) => !task.completed);
      case status.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
