import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { Header, Timer } from '../components/index'
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
export default function Pomodoro({ navigation }) {
  const { pomoCount, pomo, shortBreak, LongBreak } = useSelector(
    state => state.timerStore
  )

  return (
    <SafeAreaView style={styles.container}>
      <Timer
        minutes={pomo}
        timeText={'Pomodoro has been Started'}
        pomoCount={pomoCount}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  settings: {
    alignSelf: 'flex-end',
    marginRight: 24,
    marginTop: 24,
  },
  pomo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayTime: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  timerButton: {
    padding: 12,
    maxWidth: 300,
    backgroundColor: 'grey',
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
