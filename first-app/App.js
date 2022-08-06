import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }
  const addGoalHandler = () => {
    console.log(enteredGoal)
  }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title='Change Text'
        onPress={() => setOutputText('My new text')} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
