import { useState } from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';

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
  const [roundsNumber, setRoundsNumber] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const handleNumberSelection = (number) => {
    setNumber(number)
  }

  const handleGameOver = (numberOfRounds) => {
    setGameOver(true)
    setRoundsNumber(numberOfRounds)
  }

  const handleStartNewGame = () => {
    setNumber(null)
    setGameOver(false)
    setRoundsNumber(0)
  }

  let screen = <StartGameScreen onNumberSelect={handleNumberSelection} />

  if (enteredNumber) {
    screen = <GameScreen enteredNumber={enteredNumber} onGameOver={handleGameOver} />
  }

  if (isGameOver && enteredNumber) {
    screen = <GameOverScreen userNumber={enteredNumber} rounds={roundsNumber} onNewGameClick={handleStartNewGame} />
  }

  return (
    <>
      <StatusBar style='light' />
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
    </>
  )
}
