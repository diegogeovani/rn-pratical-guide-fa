import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalItem(props) {
  const { id, text, onDeleteItem } = props
  return (
    <TouchableOpacity onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
})
