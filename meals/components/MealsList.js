import { useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from '../components/MealItem'

export default function MealsList({ meals }) {
  const navigation = useNavigation()

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
        data={meals}
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
