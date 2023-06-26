import { StyleSheet } from 'react-native'
import colors from '../../colors'
import sizes from '../../sizes'

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ccc',
  },
  pill: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.s2,
    padding: sizes.s3,
    backgroundColor: colors.greyNeutral,
  },
})
