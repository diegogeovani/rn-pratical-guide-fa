import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'

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
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.bottomContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282"/>
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
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#e4d0ff',
    borderColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
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
