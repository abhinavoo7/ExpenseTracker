import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Items from '../../Interfaces/Items'

const NewExpense = (props: Props) => {
  const saveExpenseDataHandler = (enteredExpenseData: Items) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense

interface Props {
  onAddExpense: (expenseData: Items) => void
}
