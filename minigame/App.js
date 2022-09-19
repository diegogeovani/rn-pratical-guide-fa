import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import Colors from './constants'

const image = require('./assets/images/background.png')

const gradientColors = ['#4e0329', Colors.secondary]

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    opacity: 0.25,
  }
});

export default function App() {
  const [userNumber, setUserNumber] = useState(null)

  const handleNumberSelection = (number) => {
    setUserNumber(number)
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.root}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={styles.root}
        imageStyle={styles.image}>
        <SafeAreaView style={styles.root}>
          {
            userNumber
              ? <GameScreen />
              : <StartGameScreen onNumberSelect={handleNumberSelection} />
          }
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
