import { ChangeEvent } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props: Props) => {
  const dropDownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value)
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter

interface Props {
  onChangeFilter: (year: string) => void
  selected: string
}
