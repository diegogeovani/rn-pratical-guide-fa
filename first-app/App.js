import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  const [goals, setGoals] = useState([])

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), text: enteredGoal }])
  }

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter(goal => goal.key !== id))
  }

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title='Change Text'
        onPress={() => setOutputText('My new text')} />
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem id={itemData.item.key} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
        )}
        alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 5,
  },
});
