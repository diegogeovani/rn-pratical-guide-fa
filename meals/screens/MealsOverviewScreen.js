import { useEffect } from 'react'
import MealsList from '../components/MealsList'
import { CATEGORIES, MEALS } from '../data/dummy-data'

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params
  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
    navigation.setOptions({ title: categoryTitle })
  }, [categoryId])

  return (
    <MealsList meals={meals} />
  )
}
