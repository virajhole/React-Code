import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
  todos: [{ id: 1, text: "Hello i am viraj" }],
};

export const todoSlice = createSlice({
  name: "todo",
  intialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.id.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
