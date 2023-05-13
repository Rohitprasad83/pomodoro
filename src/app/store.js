import { configureStore } from '@reduxjs/toolkit'
import timerReducer from '../reducer/timerSlice'
export const store = configureStore({
    reducer: {
        timerStore: timerReducer,
    },
})