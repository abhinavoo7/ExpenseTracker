import { ChangeEvent, useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState<number>(0)
  const [date, setDate] = useState<Date>()

  const titleInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setTitle(event.target.value)
  }

  const amountInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setAmount(Number(event.target.value))
  }

  const dateInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setDate(new Date(event.target.value))
  }

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="0.1"
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
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
