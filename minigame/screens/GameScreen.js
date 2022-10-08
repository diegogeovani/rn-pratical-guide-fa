import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import generateRandomBetween from '../common/generateRandomBetween'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import Title from '../components/Title'
import Colors from '../constants'
import InstructionText from '../components/InstructionText'

const styles = StyleSheet.create({
  container: {
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
  buttonContainer: {
    flexDirection: 'row'
  },
})

const NumberGuess = ({ children }) => {
  return (
    <View style={styles.numberGuess}>
      <Text style={styles.numberGuessText}>{children}</Text>
    </View>
  )
}

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ enteredNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(0)

  useEffect(() => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, enteredNumber)
    setCurrentGuess(initialGuess)
  }, [])

  useEffect(() => {
    if (currentGuess === enteredNumber) {
      onGameOver()
    }
  }, [currentGuess, enteredNumber])

  const handleNextGuess = (direction) => {
    if ((direction === 'lower' && currentGuess < enteredNumber) ||
      (direction === 'greater' && currentGuess > enteredNumber)) {
      Alert.alert('Dont lie!', 'You should play fair', [{ text: 'Sorry', style: 'cancel' }])
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newGuess)
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberGuess>{currentGuess}</NumberGuess>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => handleNextGuess('lower')}>-</PrimaryButton>
          <PrimaryButton onPress={() => handleNextGuess('greater')}>+</PrimaryButton>
        </View>
      </Card>
    </View>
  )
}
