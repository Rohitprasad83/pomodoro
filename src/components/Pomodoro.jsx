import { StyleSheet } from 'react-native'
import { Timer } from './Timer'
import { useSelector } from 'react-redux'

export function Pomodoro({ pomoCount, setPomoCount, setScreen }) {
  const { pomo } = useSelector(state => state.timerStore)
  return (
    <Timer
      minutes={pomo}
      timeText={'Time to Focus!'}
      pomoCount={pomoCount}
      setPomoCount={setPomoCount}
      setScreen={setScreen}
    />
  )
}

const styles = StyleSheet.create({})
