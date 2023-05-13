import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { Header } from '../components/index'
import { MaterialIcons } from '@expo/vector-icons'
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.settings}
        onPress={() => navigation.navigate('Settings')}>
        <MaterialIcons name="settings" size={36} color="black" />
      </Pressable>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  settings: {
    alignSelf: 'flex-end',
    marginRight: 24,
    marginTop: 24,
  },
})
