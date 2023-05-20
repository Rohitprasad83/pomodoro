import { StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native'
import { useState, useEffect } from 'react'

export function Timer({ minutes, timeText, pomoCount }) {
  const [seconds, setSeconds] = useState(minutes * 60)
  const [isRunning, setIsRunning] = useState(true)
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Pomo Alert',
      'Pomodoro is running, Do you want to go to a Break?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setSeconds(0)
            nextScreen()
          },
        },
      ]
    )
  useEffect(() => {
    let interval = null
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, seconds])
  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)
  const displayTime = () => {
    const displaySeconds = seconds % 60
    const displayMinutes = Math.floor(seconds / 60)
    return `${displayMinutes < 10 ? '0' : ''}${displayMinutes}:${
      displaySeconds < 10 ? '0' : ''
    }${displaySeconds}`
  }

  function nextScreen() {
    // if (minutes === 25) {
    //   if (pomoCount > 0 && pomoCount % 4 === 0) {
    //     setScreen('LongBreak')
    //   } else {
    //     setScreen('ShortBreak')
    //   }
    // } else if (minutes === 5) {
    //   setScreen('Pomodoro')
    // } else if (minutes === 15) {
    //   setScreen('Pomodoro')
    // }
  }

  return (
    <View style={styles.container}>
      <Text>{pomoCount > 0 ? `#${pomoCount}` : ''}</Text>
      <Text style={styles.timeText}>
        {isRunning ? timeText : 'Pomodoro is Paused'}
      </Text>
      <Text style={styles.displayTime}>{displayTime()}</Text>
      <Pressable
        style={styles.timerButton}
        onPress={isRunning ? stopTimer : startTimer}>
        <Text style={styles.timerButtonText}>
          {isRunning ? 'Pause' : 'Resume'}
        </Text>
      </Pressable>
      {isRunning && (
        <Pressable
          style={styles.timerButton}
          onPress={() => {
            createTwoButtonAlert()
          }}>
          <Text style={styles.timerButtonText}>Next</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayTime: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  timerButton: {
    padding: 12,
    maxWidth: 300,
    backgroundColor: 'green',
    borderRadius: 4,
    alignItems: 'center',
  },
  timerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  timeText: {
    fontSize: 20,
    marginBottom: 10,
  },
})
