import * as React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { Slider } from '../components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { restoreDefault } from '../reducer/timerSlice'
export default function Settings() {
  const { pomo, shortBreak, longBreak } = useSelector(state => state.timerStore)
  // const [pomoValue, setPomoValue] = useState(pomo)
  // const [shortBreakValue, setShortBreakValue] = useState(shortBreak)
  // const [longBreakValue, setLongBreakValue] = useState(longBreak)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Pomodoro Duration : {pomo}</Text>
      <Slider value={pomo} type={'Pomo'} minValue={5} maxValue={60} step={5} />
      <Text>Short Break Duration : {shortBreak}</Text>

      <Slider
        value={shortBreak}
        type={'ShortBreak'}
        minValue={3}
        maxValue={15}
        step={1}
      />
      <Text>Long Break Duration : {longBreak}</Text>

      <Slider
        value={longBreak}
        type={'LongBreak'}
        minValue={10}
        maxValue={30}
        step={5}
      />
      <Pressable
        onPress={() => dispatch(restoreDefault())}
        style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Restore Default</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  slider: {
    width: '90%',
    alignSelf: 'center',
  },
  track: {
    height: 10,
  },
  thumb: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  headerButton: {
    padding: 8,
    backgroundColor: 'green',
    elevation: 8,
    borderRadius: 2,
    marginTop: 100,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})
