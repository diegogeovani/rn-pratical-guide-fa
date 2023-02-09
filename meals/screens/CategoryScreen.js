import { FlatList } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

function CategoryScreen({ navigation }) {
  const handlePress = (item) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.id,
    })
  }

  const renderItem = ({ item }) => <CategoryGridTile title={item.title} color={item.color} onPress={() => handlePress(item)} />

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  )
}

export default CategoryScreen
