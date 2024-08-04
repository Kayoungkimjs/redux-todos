import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todoSlice'

export const store = configureStore({
  //configureStore automatically adds several middleware to the store setup by default to provide a good developer experience,
  reducer: {
    todos: todosReducer,
  },
})

export default store
