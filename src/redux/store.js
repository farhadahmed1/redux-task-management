import { configureStore } from "@reduxjs/toolkit";
import tasksSlices from "./features/tasks/tasksSlices";
import userSlice from "./features/user/userSlices";

const store = configureStore({
  reducer: {
    tasksSlices: tasksSlices,
    userSlice: userSlice,
  },
});

export default store;
