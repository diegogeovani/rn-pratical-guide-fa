import { useLayoutEffect } from 'react'
import { FlatList, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PropTypes from 'prop-types'

import AllExpenses from '../AllExpenses'
import styles from './styles'
import ExpenseItem from '../../components/ExpenseItem'
import IconButton from '../../components/Icon'
import colors from '../../colors'
import AddExpenseScreen from '../AddExpenseScreen'

const title = 'Recent expenses'
const tabName = 'Recent'

const fakeData = [
  { key: 1, name: 'Foo, My Foo', date: '2023-03-03', price: 1600 },
  { key: 2, name: 'Bar, My Bar', date: '2023-03-03', price: 1600 },
  { key: 2, name: 'Brand, My Brand BrandBrandBrandBrandBrandBrand Brand Brand', date: '2023-03-03', price: 2600 },
]

const renderItem = ({ item }) => (
  <ExpenseItem
    name={item.name}
    date={item.date}
    price={item.price} />
)

const AddExpenseButton = () => {
  const navigation = useNavigation()
  const openAddScreen = () => navigation.navigate(AddExpenseScreen.name)

  return (
    <IconButton name="add" color={colors.white} onPress={openAddScreen} />
  )
}

const MainContent = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: AddExpenseButton
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={renderItem} />
    </View>
  )
}

MainContent.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', sceneContainerStyle: { backgroundColor: '#3f2f25' } }}>
    <Tab.Screen name={MainContent.name} component={MainContent} options={{ title: tabName, headerTitle: title }} />
    <Tab.Screen name={AllExpenses.name} component={AllExpenses} options={{ title: AllExpenses.title }} />
  </Tab.Navigator>
)

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={TabNavigator.name} component={TabNavigator} />
        <Stack.Screen name={AddExpenseScreen.name} component={AddExpenseScreen} options={{ presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




