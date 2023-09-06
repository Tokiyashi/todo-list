import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from "@/utils/store";
import {Todo} from "@/common/types/Todo.ts";
import {addTodo, fetchTodos} from "@/utils/firebase/todoStorage.ts";

type TodosState =
  {
    todos: Todo[]
  }

const initialState: TodosState = {
  todos: []
}

export const fetchAllTodos = createAsyncThunk("todos/fetchAllTodos", async () => {
  return await fetchTodos();
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (payload: Omit<Todo, 'id'>) => {
  return await addTodo(payload);
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.todos = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload]
    });

  },
})

export const {clearAll} = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer