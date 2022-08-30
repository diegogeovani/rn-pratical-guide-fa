import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.25,
  }
});

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={require('./assets/images/background.png')}
        style={styles.container}
        imageStyle={styles.image}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
