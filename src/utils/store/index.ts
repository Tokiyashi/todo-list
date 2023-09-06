import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlices.ts"
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch