import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <View>
        <Text>{outputText}</Text>
        <Button
          title='Change Text'
          onPress={() => setOutputText('My new text')} />
          <View style={styles.inputContainer}>
            <TextInput placeholder="Your course goal" style={styles.textInput} />
            <Button title="Add goal" />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
  },
});
