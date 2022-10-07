import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Items from '../../Interfaces/Items'
import { useState } from 'react'

const NewExpense = (props: Props) => {
  const [edit, setEdit] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData: Items) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
    setEdit(false)
  }

  const startHandlingEditing = () => {
    setEdit(true)
  }

  const stopHandlingEditing = () => {
    setEdit(false)
  }

  return (
    <div className="new-expense">
      {!edit && <button onClick={startHandlingEditing}>Add new expense</button>}
      {edit && (
        <ExpenseForm
          cancelAddingExpense={stopHandlingEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense

interface Props {
  onAddExpense: (expenseData: Items) => void
}
