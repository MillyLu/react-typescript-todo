import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store/store";
import Todo from "./types";

type TodoState = {
  todos: Array<Todo>;
};

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
