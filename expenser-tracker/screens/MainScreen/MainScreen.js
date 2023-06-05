import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import styles from './styles'

const Stack = createStackNavigator()

const MainContent = () => (
  <View style={styles.container}>
    <Text>This is the main content</Text>
  </View>
)

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MainContent.name} component={MainContent} options={{ title: 'Recent expenses' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
