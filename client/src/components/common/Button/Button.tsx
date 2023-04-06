import './Button.scss'

type Props = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
