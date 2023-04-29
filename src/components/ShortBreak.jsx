import { StyleSheet, Text, View, Button } from 'react-native'
import { useState, useEffect } from 'react'
import { Timer } from './Timer'
export function ShortBreak({ pomoCount, setScreen }) {
  return (
    <Timer
      minutes={5}
      timeText={'Time for a Break!'}
      pomoCount={pomoCount}
      setScreen={setScreen}
    />
  )
}

const styles = StyleSheet.create({})
