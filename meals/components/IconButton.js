import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({ isActive, onPress }) {
  console.log('isActive', isActive)
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name="star" size={24} color={isActive ? "white" : "grey"} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
})
