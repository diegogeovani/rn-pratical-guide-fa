import { StyleSheet, Text } from 'react-native'
import Colors from '../constants'

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 8,
  },
})

export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}
