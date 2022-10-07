import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import Items from '../../Interfaces/Items'

function ExpenseItem(props: Items) {
  // const [title, setTitle] = useState(props.title)

  // const clickhandler = () => {
  //   console.log('Button clicked!')
  //   setTitle('Updated Title!!')
  // }

  // console.log('In Expense Item')
  // console.log(props)

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button
        onClick={clickhandler}
        className="expense-item_btn btn btn-outline-light"
      >
        Change Title
      </button> */}
    </Card>
  )
}

export default ExpenseItem
