import './Card.css'

function Card(props: Props) {
  const classes = 'card ' + props.className

  return <div className={classes}>{props.children}</div>
}

export default Card

type Props = {
  className: string
  children?: React.ReactChild | React.ReactChild[]
}
