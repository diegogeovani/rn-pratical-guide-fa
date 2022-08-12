import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export default function GoalInput(props) {
  const { onAddGoal } = props
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    goalInputHandler('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})
