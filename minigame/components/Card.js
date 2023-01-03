import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../constants'

const deviceWidth = Dimensions.get('window').width

const androidContainerStyle = {
  elevation: 8,
};

const iosContainerStyle = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25,
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.plumb.dark,
    ...iosContainerStyle,
    ...androidContainerStyle,
  },
})

export default function Card({ children }) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}
