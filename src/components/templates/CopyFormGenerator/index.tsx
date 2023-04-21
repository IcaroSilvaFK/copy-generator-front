import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import {
  createdCopy,
  requestedCopyAtom,
} from '../../../atoms/requestedCopyAtom'
import { loadingRequestCopy } from '../../../atoms/loadingRequestCopy'
import { useSelectStyles } from '../../../hooks/useSelectStyles'
import { useToast } from '../../../hooks/useToast'

import { ButtonCopy, Col, Container, Flex } from './styles'

const schema = z.object({
  title: z.string().min(5),
  copy: z.string().min(5),
})
type FormPropertiesType = z.infer<typeof schema>
const options = [
  {
    value: 'Facebook Ads, TikTok Ads, e Twitter Ads',
    label: 'Facebook Ads, TikTok Ads, e Twitter Ads',
  },
  { value: 'Google Ads', label: 'Google Ads' },
]

type SelectedCopyType = 'long' | 'short' | null

// interface IGeneratedCopyPayload {
//   data: {
//     copy: {
//       description: string
//       title: string
//       createdAt: string
//     }
//   }
// }

export function CopyFormGenerator() {
  const [selectStyles] = useSelectStyles()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormPropertiesType>({
    defaultValues: {
      copy: '',
      title: '',
    },
    resolver: zodResolver(schema),
  })

  const [selectedCopyType, setSelectedCopyType] =
    useState<SelectedCopyType>(null)
  const [, setCopys] = useAtom(requestedCopyAtom)
  const [, setCreatedCopy] = useAtom(createdCopy)
  const [isLoadingRequestCopy, setIsLoadingRequestCopy] =
    useAtom(loadingRequestCopy)
  const [platform, setPlatform] = useState('')
  const { toastError, toastSuccess, simpleToast } = useToast()

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

  async function onSubmit(fields: FormPropertiesType) {
    try {
      if (!selectedCopyType) {
        simpleToast('Selecione o tamanho da copy por favor')
        return
      }
      setIsLoadingRequestCopy(true)
      const payload = {
        prompt: fields.copy,
        title: fields.title,
        maxToken: selectedCopyType === 'long' ? 500 : 300,
        platform,
      }

      const response = await fetch('/api/generate/copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = response.body

      if (!data) {
        return
      }

      const reader = data.getReader()

      const decoder = new TextDecoder()
      let done = false

      setCreatedCopy(new Date())
      setCopys('')
      while (!done) {
        const { value, done: doneReading } = await reader.read()

        done = doneReading

        const chunkValue = decoder.decode(value)

        setCopys((prev) => prev + chunkValue)
      }

      toastSuccess('Copy gerada com sucesso')
      reset()
    } catch (err) {
      toastError('Erro ao gerar o copy por favor tente novamente')
    } finally {
      setIsLoadingRequestCopy(false)
    }
  }

  return (
    <Container>
      <header>
        <h3>Que tal produzirmos uma copy persuasiva?</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col>
          <label>Para qual plataforma irá usar a copy?</label>
          <Select
            options={options}
            styles={selectStyles}
            placeholder="Selecione uma opção"
            onChange={(e) => {
              const { value } = e as { value: string }
              setPlatform(value)
            }}
          />
        </Col>

        <Col>
          <label>Nos diga o nome do seu serviço ou produto</label>
          <input
            type="text"
            placeholder="Digite aqui..."
            {...register('title')}
          />
        </Col>

        <Col>
          <label>
            Agora me de o máximo de detalhes possíveis sobre o seu produto e/ou
            serviço
          </label>
          <textarea
            placeholder="Fale sobre o que você vende, os benefícios, seu diferencial do concorrente, como o produto/serviço pode resolver problemas ou atender às necessidades do público-alvo. Separe cada informação por linha!"
            {...register('copy')}
          />
        </Col>
        <Flex>
          <ButtonCopy
            isActive={selectedCopyType === 'long'}
            onClick={() => setSelectedCopyType('long')}
          >
            <BiMenu size={22} />
            <span>Copy longa</span>
          </ButtonCopy>
          <ButtonCopy
            isActive={selectedCopyType === 'short'}
            onClick={() => setSelectedCopyType('short')}
          >
            <BiMenuAltLeft size={22} />
            <span>Copy curta</span>
          </ButtonCopy>
        </Flex>
        <button disabled={isLoadingRequestCopy}>Gerar minha copy</button>
      </form>
    </Container>
  )
}
