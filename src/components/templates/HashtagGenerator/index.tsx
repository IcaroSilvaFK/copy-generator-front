import { useForm } from 'react-hook-form'
import { Button } from '../../atoms/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'
import { InputRoot } from '../../atoms/Inputs'

const schema = z.object({
  description: z.string(),
  quantity: z.number().positive(),
})

type FormType = z.infer<typeof schema>

export function HashtagGenerator() {
  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormType) {
    console.log(data)
  }

  return (
    <S.Container>
      <header>
        <h3>Gere varias hashtags para suas publicações</h3>
      </header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <InputRoot.InputContainer>
          <InputRoot.Label htmlFor="description">
            Deseja que seja criada quantas hashtags
          </InputRoot.Label>
          <InputRoot.TextArea
            id="description"
            placeholder="Por exemplo: Foto de carro super veloz da Ford, Mustang 2022..."
            {...register('description')}
          />
        </InputRoot.InputContainer>
        <InputRoot.InputContainer>
          <InputRoot.Label htmlFor="">
            Quantas hashtags deseja gerar ?
          </InputRoot.Label>
          <InputRoot.Input
            type="number"
            placeholder="Por exemplo: 3"
            {...register('quantity', {
              valueAsNumber: true,
            })}
          />
        </InputRoot.InputContainer>
        <Button variant="solid" type="submit">
          Gerar minhas hashtags
        </Button>
      </S.Form>
    </S.Container>
  )
}
