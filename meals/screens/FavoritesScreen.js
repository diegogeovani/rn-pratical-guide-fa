import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data'
import { FavoriteContext } from '../store/contexts/favorite'

const NoFavoritesMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>You have no favorites yet.</Text>
  </View>
)

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoriteContext)
  const meals = MEALS.filter((meal) => favorites.includes(meal.id))

  return meals.length > 0
    ? <MealsList meals={meals} />
    : <NoFavoritesMessage />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})
