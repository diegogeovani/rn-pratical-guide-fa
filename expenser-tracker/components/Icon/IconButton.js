import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

import { pressableStyle } from './styles'

export default function IconButton({ name, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  )
}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
}
