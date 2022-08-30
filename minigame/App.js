import { ImageBackground, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import StartGameScreen from './screens/StartGameScreen'

const image = require('./assets/images/background.png')

const gradientColors = ['#4e0329', '#ddb52f']

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    opacity: 0.25,
  }
});

export default function App() {
  return (
    <LinearGradient colors={gradientColors} style={styles.root}>
      <ImageBackground
        resizeMode='cover'
        source={image}
        style={styles.root}
        imageStyle={styles.image}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
