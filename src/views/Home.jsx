import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { Header } from '../components/index'
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
export default function Home({ navigation }) {
  const { pomo } = useSelector(state => state.timerStore)
  const displayTime = () => {
    const displaySeconds = pomo * 60
    return `${displayMinutes < 10 ? '0' : ''}${displayMinutes}:${
      displaySeconds < 10 ? '0' : ''
    }${displaySeconds}`
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.settings}
        onPress={() => navigation.navigate('Settings')}>
        <MaterialIcons name="settings" size={36} color="black" />
      </Pressable>
      <View style={styles.pomo}>
        <Text style={styles.timeText}>Time to Focus!</Text>
        <Text style={styles.displayTime}>
          {pomo < 10 ? '0' : ''}
          {pomo}:00
        </Text>
        <Pressable
          style={styles.timerButton}
          onPress={() => navigation.navigate('Pomodoro')}>
          <Text style={styles.timerButtonText}>Start a Pomodoro</Text>
        </Pressable>
      </View>
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
