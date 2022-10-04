import { ChangeEvent, FormEvent, useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props: Props) => {
  const [enteredTitle, setTitle] = useState('')
  const [enteredAmount, setAmount] = useState('')
  const [enteredDate, setDate] = useState('')

  // Approach 2
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })

  const titleInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setTitle(event.target.value)

    // Using Approach 2
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // })
    // Better way for Approach 2
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   }
    // })
  }

  const amountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setAmount(event.target.value)
  }

  const dateInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setDate(event.target.value)
  }

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: Number(enteredAmount),
    }

    // console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={enteredAmount}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

interface Props {
  onSaveExpenseData: (expenseData: ExpenseData) => void
}

interface ExpenseData {
  title: string
  amount: number
  date: Date
}
