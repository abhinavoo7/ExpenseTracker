import './Card.css'

// Another way to write function
const Card = (props: Props) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card

type Props = {
  className: string
  // children?: React.ReactChild | React.ReactChild[]
  //  Since it is depriciated we use
  children?:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string[]
    | number[]
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
}
