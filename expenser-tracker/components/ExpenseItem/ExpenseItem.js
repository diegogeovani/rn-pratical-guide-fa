import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default function ExpenseItem({ name, date, price }) {
  return (
    <View style={styles.container}>
      {/* <Pressable> */}
      <View style={{ flexGrow: 1, flexShrink: 1 }}>
        <Text>{name}</Text>
        <Text>{date}</Text>
      </View>
      <View style={{ flexBasis: 96, justifyContent: 'center' }}>
        <Text>{price}</Text>
      </View>
      {/* </Pressable> */}
    </View>
  )
}

ExpenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
