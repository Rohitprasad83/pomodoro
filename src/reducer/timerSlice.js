import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pomo: 25,
    shortBreak: 5,
    longBreak: 15,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerValues: (state, action) => {
            console.log('from reducer', action.payload)
            state.pomo = action.payload.pomoValue
            state.shortBreak = action.payload.shortBreakValue
            state.longBreak = action.payload.longBreakValue
        },
    },
})

export const { setTimerValues } = timerSlice.actions

export default timerSlice.reducer