import { StyleSheet, Text } from 'react-native'
import Colors from '../constants'

const styles = StyleSheet.create({
  label: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.secondary,
  },
})

export default function InstructionText({ children, style }) {
  return (
    <Text style={[styles.label, style]}>{children}</Text>
  )
}
