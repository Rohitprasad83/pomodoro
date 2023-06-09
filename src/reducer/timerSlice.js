import { createSlice } from '@reduxjs/toolkit'
import { LongBreak } from '../components/LongBreak'

const initialState = {
    pomo: 25,
    shortBreak: 5,
    longBreak: 15,
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerValue: (state, action) => {
            switch (action.payload.type) {
                case 'Pomo':
                    {
                        state.pomo = action.payload.value
                        break
                    }
                case 'ShortBreak':
                    {
                        state.shortBreak = action.payload.value
                        break
                    }
                case 'LongBreak':
                    {
                        state.longBreak = action.payload.value
                        break
                    }
            }
        },
        restoreDefault: state => {;
            (state.pomo = 25), (state.shortBreak = 5), (state.longBreak = 15)
        },
    },
})

export const { setTimerValue, restoreDefault } = timerSlice.actions

export default timerSlice.reducer