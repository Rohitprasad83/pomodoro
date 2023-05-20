import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import Home from './src/views/Home'
import Settings from './src/views/Settings'
import Pomodoro from './src/views/Pomodoro'
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Pomodoro" component={Pomodoro} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
