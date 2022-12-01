import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'

import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import Colors from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    textAlign: 'center',
    color: Colors.secondary,
  },
  buttons: {
    flexDirection: 'row',
  },
})

export default function StartGameScreen({ onNumberSelect }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  const handleNumberInput = (value) => {
    setEnteredNumber(value)
  }

  const handleConfirmInput = () => {
    const number = parseInt(enteredNumber, 10);
    if (Number.isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        'Invalid number!',
        'Has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetNumber }]
      );
      return;
    }
    onNumberSelect(number)
  }

  const resetNumber = () => {
    setEnteredNumber('')
  }

  return (
    <View style={styles.container}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={2}
          onChangeText={handleNumberInput}
          value={enteredNumber}
          style={styles.input}
        />
        <View style={styles.buttons}>
          <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  )
}
