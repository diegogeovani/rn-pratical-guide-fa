import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
})

export default styles

export const pressableStyle = ({ pressed }) => pressed && styles.pressed

