import { Pressable, StyleSheet, Text, View } from 'react-native'

const androidContainerStyle = {
  elevation: 2,
};

const iosButtonStyle = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    ...androidContainerStyle,
    ...iosButtonStyle,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
})

export default function PrimaryButton({ children, onPress }) {
  const getPressableStyle = ({ pressed }) => pressed ? [styles.pressed, styles.button] : styles.button

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={getPressableStyle}
        android_ripple={{ color: '#640233' }}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}
