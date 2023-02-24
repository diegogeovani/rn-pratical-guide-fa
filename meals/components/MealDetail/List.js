import { StyleSheet, Text, View } from 'react-native'

export default function List({ data }) {
  return data.map((item) => (
    <View key={item} style={styles.list}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  list: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: '#e2b497',
  },
  text: {
    color: '#351401',
    textAlign: 'center',
  },
})
