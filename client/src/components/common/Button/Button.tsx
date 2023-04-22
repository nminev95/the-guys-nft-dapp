import { Button as MaterialButton, ButtonProps } from '@mui/material'

// type Props = ButtonProps & {
//   text: string
//   size:
//   onClick: () => void
// }

const Button = ({
  children,
  variant = 'outlined',
  size = 'medium',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <div className="Button">
      <MaterialButton
        {...props}
        variant={variant}
        size={size}
        onClick={onClick}
      >
        {children}
      </MaterialButton>
    </div>
  )
}

export default Button
