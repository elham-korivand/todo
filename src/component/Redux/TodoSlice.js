import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [{ id: 1, title: "eli" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    additem: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        title: action.payload,
      };
      state.todolist.push(todo);
    },
    removeitem: (state, action) => {
      state.todolist = state.todolist.filter(
        (item) => item.id !== action.payload
      );
    },
    edititem: (state, action) => {
      state.todolist.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.id = action.payload.id;
        } else {
          console.log("lkl");
        }
      });
    },
  },
});

export const { additem, removeitem, edititem } = todoSlice.actions;
export default todoSlice.reducer;
