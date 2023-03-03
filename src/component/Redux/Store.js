import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});

export default store;
