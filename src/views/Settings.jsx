import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { Slider } from '../components/Slider'
export default function Settings() {
  const [pomoValue, setPomoValue] = useState(5)
  const [shortBreakValue, setShortBreakValue] = useState(3)
  const [longBreakValue, setLongBreakValue] = useState(10)

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
      <Pressable>
        <Text>Save</Text>
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
    color: 'pink',
  },
  thumb: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
})
