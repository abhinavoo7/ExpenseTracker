import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'

interface Items {
  id?: string
  title: string
  amount: number
  date: Date
}

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
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <div>
          {filteredExpenses.length === 0 ? (
            <p className="noExpense">Sorry! No expenses found.</p>
          ) : (
            filteredExpenses.map((expense: Items) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date!}
                />
              )
            })
          )}
        </div>
        <div></div>
      </Card>
    </div>
  )
}

export default Expenses
