import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className='expenes-List__fallback'>Found no expenses.</h2>
  }

  return (
    <ul className='expenses-List'>
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}
export default ExpensesList
