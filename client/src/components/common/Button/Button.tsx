import { ReactNode } from 'react'
import './Button.scss'

type Props = {
  variant: 'primary' | 'secondary'
  children: ReactNode
  onClick: () => void
}

const Button = ({ variant, children, onClick }: Props) => {
  return (
    <div className="Button">
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
