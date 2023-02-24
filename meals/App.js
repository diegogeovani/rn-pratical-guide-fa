import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoryScreen from './screens/CategoryScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>
          <Stack.Screen name="MealsCategories" component={CategoryScreen} options={{ title: 'Meals Categories', }} />
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
          <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} options={{ title: 'Meal', }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
