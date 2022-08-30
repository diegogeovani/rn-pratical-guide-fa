import { TextInput, View, StyleSheet } from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

const androidContainerStyle = {
  elevation: 8,
};

const iosContainerStyle = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#4f021F',
    ...iosContainerStyle,
    ...androidContainerStyle,
  },
  input: {
    width: 50,
    height: 50,
    marginVertical: 8,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    textAlign: 'center',
    color: '#ddb52f',
  },
  buttons: {
    flexDirection: 'row',
  },
})

export default function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        maxLength={2}
        style={styles.input}
      />
      <View style={styles.buttons}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  )
}
