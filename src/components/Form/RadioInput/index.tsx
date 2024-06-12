import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react'

import { RadioContainer } from './styles'

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  id: string
  value: string
  label: string
  icon: ReactNode
}

export const RadioInput = forwardRef(function Radio(
  { id, value, label, icon, ...rest }: RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <RadioContainer>
      <input type="radio" id={id} value={value} {...rest} ref={ref} hidden />
      <label htmlFor={id}>
        {icon}
        <span>{label}</span>
      </label>
    </RadioContainer>
  )
})
