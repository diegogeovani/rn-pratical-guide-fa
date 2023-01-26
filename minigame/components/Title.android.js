import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: '80%',
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'grey',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    padding: 8,
  },
})

export default function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}
