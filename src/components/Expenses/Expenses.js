import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses (props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </div>
      {props.items.map(expenses => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  )
}

export default Expenses
