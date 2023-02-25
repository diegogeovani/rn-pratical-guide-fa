import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoryScreen from './screens/CategoryScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen'

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', sceneContainerStyle: { backgroundColor: '#3f2f25' } }}>
    <Drawer.Screen name="Categories" component={CategoryScreen} options={{ title: 'All Categories' }} />
    <Drawer.Screen name="Favories" component={FavoritesScreen} />
  </Drawer.Navigator>
)

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const { categoryId } = route.params
          //   return {
          //     title: categoryId,
          //   }
          // }}
          />
          <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} options={{ title: 'Meal' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
