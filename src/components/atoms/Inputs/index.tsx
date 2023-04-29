import {
  InputHTMLAttributes,
  forwardRef,
  LabelHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'

import * as S from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface IInputContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const InputContainer = (props: IInputContainerProps) => {
  const { children } = props
  return <S.InputContainer {...props}>{children}</S.InputContainer>
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <S.Container {...props} ref={ref} />
))

const Label = forwardRef<HTMLLabelElement, ILabelProps>((props, ref) => {
  const { children } = props
  return (
    <S.InputLabel {...props} ref={ref}>
      {children}
    </S.InputLabel>
  )
})

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => <S.Textarea {...props} ref={ref} />,
)

TextArea.displayName = 'textarea'
Label.displayName = 'label'
Input.displayName = 'input'

export const InputRoot = {
  Input,
  Label,
  InputContainer,
  TextArea,
}
