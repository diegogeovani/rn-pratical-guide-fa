import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'

export default function GoalInput(props) {
  const { visible, onAddGoal, onClose } = props
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    goalInputHandler('')
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.bottomContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
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
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
})
