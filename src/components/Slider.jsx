import { StyleSheet, Text, View, Button } from 'react-native'
import { Slider as SliderComp } from '@miblanchard/react-native-slider'

export function Slider({ value, setValue, minValue, maxValue, step }) {
  return (
    <View style={styles.slider}>
      <SliderComp
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        value={value}
        onValueChange={value => setValue(value[0])}
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
