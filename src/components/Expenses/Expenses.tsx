import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import Items from '../../Interfaces/Items'
import ExpensesList from './ExpensesList'

interface Props {
  items: Items[]
}

function Expenses(props: Props) {
  const [filteredYear, setFilterYear] = useState('2022')

  const filterChangeHandler = (selectedYear: string) => {
    console.log('Expense.tsx')
    console.log(selectedYear)
    setFilterYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(
    (expenses) => expenses.date.getFullYear().toString() === filteredYear,
  )

  // console.log('In Expenses.tsx')
  // console.log(props.items)

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesList items={filteredExpenses} />
          <div></div>
        </Card>
      </li>
    </div>
  )
}

export default Expenses
