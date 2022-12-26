import { useEffect, useState } from 'react'
import { Alert, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import generateRandomBetween from '../common/generateRandomBetween'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import Title from '../components/Title'
import Colors from '../constants'
import InstructionText from '../components/InstructionText'
import GuessLogItem from '../components/GuessLogItem'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
  },
  numberGuess: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberGuessText: {
    fontWeight: 'bold',
    color: Colors.secondary,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  list: {
    flex: 1,
    padding: 16,
  }
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
  const [roundsLogs, setRoundsLogs] = useState([])

  const numberOfRounds = roundsLogs.length

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, enteredNumber)
    setCurrentGuess(initialGuess)
  }, [])

  useEffect(() => {
    if (currentGuess === enteredNumber) {
      onGameOver(numberOfRounds)
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
    setRoundsLogs((prevRoundsLogs) => [newGuess, ...prevRoundsLogs])
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberGuess>{currentGuess}</NumberGuess>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => handleNextGuess('lower')}>
            <Ionicons name="md-remove" size={23} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={() => handleNextGuess('greater')}>
            <Ionicons name="md-add" size={23} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.list}>
        <FlatList
          data={roundsLogs}
          renderItem={(itemData) => (
            <GuessLogItem roundNumber={numberOfRounds - itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item} />
      </View>
    </View>
  )
}
