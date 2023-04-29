import { LabelHTMLAttributes, forwardRef } from 'react'

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, ILabelProps>((props, ref) => (
  <label {...props} ref={ref} />
))

Label.displayName = 'label'
