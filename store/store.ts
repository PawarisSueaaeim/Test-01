import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import autoDeleteTodoListSlice from './feature/todo/AutoDeleteTodoListSlice'

export const store = configureStore({
    reducer: {
        autoDeleteTodoListSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();