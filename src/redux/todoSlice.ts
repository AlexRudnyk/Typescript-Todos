import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.unshift({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
