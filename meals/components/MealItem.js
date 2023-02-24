import { Image, Pressable, Text, View, StyleSheet, Platform } from 'react-native'
import MealDetails from './MealDetails'

export default function MealItem(props) {
  const { title, imageUrl, duration, complexity, affordability, onPress } = props

  const handlePress = () => {
    onPress(props)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [pressed ? styles.buttonPressed : null]}>
        <View style={styles.wrapper}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  wrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})
