import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import generateRandomBetween from '../common/generateRandomBetween'
import Title from '../components/Title'
import Colors from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  numberGuess: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberGuessText: {
    fontWeight: 'bold',
    color: Colors.secondary,
    fontSize: 36,
  },
})

const NumberGuess = ({ children }) => {
  return (
    <View style={styles.numberGuess}>
      <Text style={styles.numberGuessText}>{children}</Text>
    </View>
  )
}

export default function GameScreen({ enteredNumber }) {
  const initialGuess = generateRandomBetween(1, 100, enteredNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberGuess>{currentGuess}</NumberGuess>
      <Text></Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  )
}
