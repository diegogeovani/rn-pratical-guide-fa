import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants'

const androidContainerStyle = {
  elevation: 4,
};

const iosContainerStyle = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 4,
  shadowOpacity: 0.25,
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    ...iosContainerStyle,
    ...androidContainerStyle,
  },
  text: {
    fontFamily: 'open-sans',
  }
})

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's guess: {guess}</Text>
    </View >
  )
}
