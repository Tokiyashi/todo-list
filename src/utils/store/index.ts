import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlices.ts"
import userReducer from "./slices/userSlices.ts"
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch