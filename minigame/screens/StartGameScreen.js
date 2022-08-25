import { TextInput, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    width: 50,
    height: 50,
    fontSize: 32,
    marginVertical: 8,
    fontWeight: 'bold',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    textAlign: 'center',
    color: '#ddb52f',
  },
})

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} maxLength={2} style={styles.input} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
