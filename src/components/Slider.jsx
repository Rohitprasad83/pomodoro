import { StyleSheet, Text, View, Button } from 'react-native'
import { Slider as SliderComp } from '@miblanchard/react-native-slider'
import { useDispatch } from 'react-redux'
import { setTimerValue } from '../reducer/timerSlice'
export function Slider({ value, type, minValue, maxValue, step }) {
  const dispatch = useDispatch()
  return (
    <View style={styles.slider}>
      <SliderComp
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        value={value}
        onValueChange={value =>
          dispatch(setTimerValue({ type: type, value: value[0] }))
        }
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
      />
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
})
