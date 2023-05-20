import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import { Pomodoro } from './Pomodoro'
import { ShortBreak } from './ShortBreak'
import { LongBreak } from './LongBreak'
export function Header() {
  const [screen, setScreen] = useState('Pomodoro')
  const [pomoCount, setPomoCount] = useState(0)
  return (
    <View style={styles.headerContainer}>
      {/* <View style={styles.headers}>
        <Pressable
          style={screen === 'Pomodoro' ? styles.modeOn : styles.headerButton}
          onPress={() => setScreen('Pomodoro')}
          android_ripple={{ color: '#fff' }}>
          <Text style={styles.headerButtonText}>Pomodoro</Text>
        </Pressable>
        <Pressable
          style={screen === 'ShortBreak' ? styles.modeOn : styles.headerButton}
          onPress={() => setScreen('ShortBreak')}
          android_ripple={{ color: '#fff' }}>
          <Text style={styles.headerButtonText}>Short Break</Text>
        </Pressable>
        <Pressable
          style={screen === 'LongBreak' ? styles.modeOn : styles.headerButton}
          onPress={() => setScreen('LongBreak')}
          android_ripple={{ color: '#fff' }}>
          <Text style={styles.headerButtonText}>Long Break</Text>
        </Pressable>
      </View> */}
      {/* <View>
        {screen === 'Pomodoro' ? (
          <Pomodoro
            pomoCount={pomoCount}
            setPomoCount={() => setPomoCount(pomoCount + 1)}
            setScreen={setScreen}
          />
        ) : screen === 'ShortBreak' ? (
          <ShortBreak pomoCount={pomoCount} setScreen={setScreen} />
        ) : (
          <LongBreak pomoCount={pomoCount} setScreen={setScreen} />
        )}
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 100,
  },
  headers: {
    flexDirection: 'row',
    gap: 4,
  },
  headerButton: {
    padding: 8,
    backgroundColor: 'blue',
    elevation: 8,
    borderRadius: 2,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modeOn: {
    padding: 8,
    backgroundColor: 'green',
    elevation: 25,
    borderRadius: 2,
  },
})
