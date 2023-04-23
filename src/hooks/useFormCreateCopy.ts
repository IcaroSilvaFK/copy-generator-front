import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useToast } from './useToast'

import {
  CreateCopyFormProperties,
  createCopySchema,
} from '../schemas/CreateCopy.schema'

export function useFormCreateCopy() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCopyFormProperties>({
    defaultValues: {
      copy: '',
      title: '',
    },
    resolver: zodResolver(createCopySchema),
  })
  const { toastError } = useToast()

  useEffect(
    () => {
      if (errors.title || errors.copy) {
        toastError(
          `O campo ${
            errors.title ? 'nome' : 'descrição'
          } precisa ser preenchido corretamente`,
        )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [errors.copy, errors.title],
  )

  return {
    register,
    handleSubmit,
    reset,
    errors,
  }
}
