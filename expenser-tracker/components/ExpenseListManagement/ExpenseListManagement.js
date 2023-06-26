import { FlatList, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import ExpenseItem from '../../components/ExpenseItem'
import styles from './styles'

const ExpensesTotalPill = ({ label, totalValue }) => (
  <View style={styles.pill}>
    <Text>{label}</Text>
    <Text>{`R$ ${totalValue},00`}</Text>
  </View>
)

ExpensesTotalPill.propTypes = {
  label: PropTypes.string,
  totalValue: PropTypes.number,
}

const renderItem = ({ item }) => (
  <ExpenseItem
    name={item.name}
    date={item.date}
    price={item.price} />
)

export default function ExpenseListManagement({ expenses, title }) {
  return (
    <View style={styles.container}>
      <ExpensesTotalPill label={title} totalValue={200} />

      <FlatList
        data={expenses}
        keyExtractor={(expense) => expense.name}
        renderItem={renderItem} />
    </View>
  )
}

ExpenseListManagement.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
}
