import { FlatList } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

function CategoryScreen() {
  const renderItem = ({ item }) => <CategoryGridTile title={item.title} color={item.color} />

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
