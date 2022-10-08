import { StyleSheet, Text } from 'react-native'
import Colors from '../constants'

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    color: Colors.secondary,
  },
})

export default function InstructionText({ children }) {
  return (
    <Text style={styles.label}>{children}</Text>
  )
}
