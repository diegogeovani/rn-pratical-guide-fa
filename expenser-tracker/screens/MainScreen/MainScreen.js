import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AllExpenses from '../AllExpenses'
import styles from './styles'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const title = 'Recent expenses'
const tabName = 'Recent'

const MainContent = () => (
  <View style={styles.container}>
    <Text>This is the main content</Text>
  </View>
)

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
