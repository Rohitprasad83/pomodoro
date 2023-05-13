import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pomoValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerValues: (state, action) => {
            state.pomoValue = action.payload.pomoValue
            state.shortBreakValue = action.payload.shortBreakValue
            state.longBreakValue = action.payload.longBreakValue
        },
    },
})

export const { setTimerValues } = timerSlice.actions

export default timerSlice.reducers