import { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

// import { useRoute } from '@react-navigation/native'

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
    navigation.setOptions({ title: categoryTitle })
  }, [categoryId])

  const handleItemPress = (item) => {
    navigation.navigate("MealDetailsScreen", {
      mealId: item.mealId,
    })
  }

  const renderItem = ({ item }) => (
    <MealItem
      mealId={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      onPress={handleItemPress}
    />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})
