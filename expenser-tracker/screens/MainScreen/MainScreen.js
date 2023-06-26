import { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PropTypes from 'prop-types'

import AllExpensesScreen from '../AllExpensesScreen'
import IconButton from '../../components/Icon'
import colors from '../../colors'
import AddExpenseScreen from '../AddExpenseScreen'
import ExpenseListManagement from '../../components/ExpenseListManagement/ExpenseListManagement'
import lastExpenses from './lastExpenses'

const title = 'Recent expenses'
const tabName = 'Recent'

const fakeData = [
  { name: 'Livro para fundamentos da música', price: 1230, date: new Date(2023, 6, 26) },
  { name: 'Foo, My Foo', date: new Date(1995, 10, 17), price: 1600 },
  { name: 'Bar, My Bar', date: new Date(2023, 2, 3), price: 1600 },
  { name: 'Brand, My Brand BrandBrandBrandBrandBrandBrand Brand Brand', date: new Date(2023, 4, 20), price: 2600 },
  { name: 'Harmonia para trompetistas - improvisos e técnicas avançadas', price: 51290, date: new Date(2023, 6, 23) },
]

const AddExpenseButton = ({ onPress }) => (
  <IconButton name="add" color={colors.white} onPress={onPress} />
)

const LastExpenses = ({ navigation }) => {
  const openAddExpenseScreen = () => {
    navigation.navigate(AddExpenseScreen.name)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => AddExpenseButton({ onPress: openAddExpenseScreen })
    })
  }, [navigation])


  return (<ExpenseListManagement title="Last 7 days" expenses={lastExpenses(fakeData)} />)
}

LastExpenses.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', sceneContainerStyle: { backgroundColor: '#3f2f25' } }}>
    <Tab.Screen name={LastExpenses.name} component={LastExpenses} options={{ title: tabName, headerTitle: title }} />
    <Tab.Screen name={AllExpensesScreen.name} component={AllExpensesScreen} options={{ title: AllExpensesScreen.title }} />
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




