import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), text: enteredGoal }])
  }

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter(goal => goal.key !== id))
  }

  const startAddGoalHandler = () => {
    setModalVisible(true)
  }

  const handleCloseGoalInput = () => {
    setModalVisible(false)
  }

  return (
    <React.Fragment>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button title='Add new goal' color='#b180f0' onPress={startAddGoalHandler} />
        <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onClose={handleCloseGoalInput} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem id={itemData.item.key} text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
            )}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
