import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { Timer } from './Timer'
export function Pomodoro({ pomoCount, setPomoCount, setScreen }) {
  return (
    <Timer
      minutes={25}
      timeText={'Time to Focus!'}
      pomoCount={pomoCount}
      setPomoCount={setPomoCount}
      setScreen={setScreen}
    />
  )
}

const styles = StyleSheet.create({})
