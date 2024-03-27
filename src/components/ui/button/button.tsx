import { ButtonUI, type ButtonUIProps } from './button-ui'

interface ButtonProps extends ButtonUIProps {
  buttonText: string
}

export const Button = ({ variant = 'default', size = 'default', buttonText }: ButtonProps) => {
  return (
    <ButtonUI variant={variant} size={size}>
      {buttonText}
    </ButtonUI>
  )
}
