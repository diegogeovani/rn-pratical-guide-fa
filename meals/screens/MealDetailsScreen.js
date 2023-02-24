import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import List from '../components/MealDetail/List'

import Subtitle from '../components/MealDetail/Subtitle'
import MealDetails from '../components/MealDetails'
import { MEALS } from '../data/dummy-data'

export default function MealDetailsScreen({ route }) {
  const { mealId } = route.params
  const meal = MEALS.find(meal => meal.id === mealId)
  const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = meal

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 360,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  detailContainer: {
    alignItems: 'center',
  },
  detail: {
    width: '80%',
  }
})
