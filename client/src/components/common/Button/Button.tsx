import './Button.scss'

const Button = ({ children, onClick, ...props }: any) => {
  return (
    <div className="Button">
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
