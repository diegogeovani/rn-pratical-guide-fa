import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'
import MainScreen from './screens/MainScreen'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <MainScreen />
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
