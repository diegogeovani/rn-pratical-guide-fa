import { Image, Text, View, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 6,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: 'red',
  }
})

const image = require('../assets/images/success.png')

export default function GameOverScreen({rounds, userNumber, onNewGameClick}) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{rounds}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGameClick}>Start New Game</PrimaryButton>
    </View>
  )
}
