import { StyleSheet, Text, View, Button } from 'react-native'
import { Timer } from './Timer'
import { useSelector } from 'react-redux'

export function LongBreak({ pomoCount, setScreen }) {
  const { longBreak } = useSelector(state => state.timerStore)
  return (
    <Timer
      minutes={longBreak}
      timeText={'Time for a Break!'}
      pomoCount={pomoCount}
      setScreen={setScreen}
    />
  )
}

const styles = StyleSheet.create({})
