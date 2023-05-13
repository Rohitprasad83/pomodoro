import * as React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { Slider } from '../components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { setTimerValues } from '../reducer/timerSlice'
export default function Settings() {
  const { pomo, shortBreak, longBreak } = useSelector(state => state.timerStore)
  const [pomoValue, setPomoValue] = useState(pomo)
  const [shortBreakValue, setShortBreakValue] = useState(shortBreak)
  const [longBreakValue, setLongBreakValue] = useState(longBreak)
  const dispatch = useDispatch()
  // console.log('from settings', pomo)
  // console.log(typeof pomoValue, pomoValue)
  return (
    <View>
      <Text>Pomodoro Duration : {pomoValue}</Text>
      <Slider
        value={pomoValue}
        setValue={setPomoValue}
        minValue={5}
        maxValue={60}
        step={5}
      />
      <Text>Short Break Duration : {shortBreakValue}</Text>

      <Slider
        value={shortBreakValue}
        setValue={setShortBreakValue}
        minValue={3}
        maxValue={15}
        step={1}
      />
      <Text>Long Break Duration : {longBreakValue}</Text>

      <Slider
        value={longBreakValue}
        setValue={setLongBreakValue}
        minValue={10}
        maxValue={30}
        step={5}
      />
      <Pressable
        onPress={() =>
          dispatch(
            setTimerValues({ pomoValue, shortBreakValue, longBreakValue })
          )
        }
        style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Save</Text>
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
    backgroundColor: 'blue',
    elevation: 8,
    borderRadius: 2,
    marginTop: 100,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
})
