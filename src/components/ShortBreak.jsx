import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { Timer } from './Timer'
import { useSelector } from 'react-redux'
export function ShortBreak({ pomoCount, setScreen }) {
  const { shortBreak } = useSelector(state => state.timerStore)
  return (
    <Timer
      minutes={shortBreak}
      timeText={'Time for a Break!'}
      pomoCount={pomoCount}
      setScreen={setScreen}
    />
  )
}

const styles = StyleSheet.create({})
