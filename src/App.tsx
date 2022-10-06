import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'

function App() {
  const dummyExpenses: ExpenseData[] = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [expenseList, setExpenses] = useState(dummyExpenses)

  const addExpenseDataHandler = (expense: ExpenseData) => {
    console.log('In app.tsx')
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })

    // setExpenses((prevExpenses)=>{
    //   return [expenseData, ...prevExpense]
    // })
    // console.log('In app.tsx')
    // console.log(expenseList)
  }

  // console.log(expenseList)
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenseList} />
    </div>
  )
}

export default App

interface ExpenseData {
  id: string
  title: string
  amount: number
  date: Date
}
