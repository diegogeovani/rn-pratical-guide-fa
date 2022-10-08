import { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Colors from './constants'
import GameScreen from './screens/GameScreen'
import StartGameScreen from './screens/StartGameScreen'
import GameOverScreen from './screens/GameOverScreen'

const backgroundImage = require('./assets/images/background.png')

const gradientColors = ['#4e0329', Colors.secondary]

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    opacity: 0.25,
  }
})

export default function App() {
  const [enteredNumber, setNumber] = useState(null)
  const [isGameOver, setGameOver] = useState(false)

  const handleNumberSelection = (number) => {
    setNumber(number)
  }

  const handleGameOver = () => {
    setGameOver(true)
  }

  let screen = <StartGameScreen onNumberSelect={handleNumberSelection} />

  if (enteredNumber) {
    screen = <GameScreen enteredNumber={enteredNumber} onGameOver={handleGameOver} />
  }

  if (isGameOver) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={gradientColors} style={styles.root}>
      <ImageBackground
        resizeMode='cover'
        source={backgroundImage}
        style={styles.root}
        imageStyle={styles.image}>
        <SafeAreaView style={styles.root}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}
