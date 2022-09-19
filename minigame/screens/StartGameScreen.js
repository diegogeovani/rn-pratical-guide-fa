import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants';

const androidContainerStyle = {
  elevation: 8,
};

const iosContainerStyle = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.plumb.dark,
    ...iosContainerStyle,
    ...androidContainerStyle,
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
    console.log(number)
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
    </View>
  )
}
