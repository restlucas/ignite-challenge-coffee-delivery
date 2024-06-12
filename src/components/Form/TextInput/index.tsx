import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'
import { FieldError } from 'react-hook-form'

import { Input } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  return <Input type="text" ref={ref} {...rest} />
})
