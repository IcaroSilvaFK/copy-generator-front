import Select from 'react-select'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'

import {
  createdCopy,
  requestedCopyAtom,
} from '../../../atoms/requestedCopyAtom'
import { loadingRequestCopy } from '../../../atoms/loadingRequestCopy'
import { useSelectStyles } from '../../../hooks/useSelectStyles'
import { useToast } from '../../../hooks/useToast'
import { Button } from '../../atoms/Button'

import * as S from './styles'
import { CreateCopyFormProperties } from '../../../schemas/CreateCopy.schema'
import { useFormCreateCopy } from '../../../hooks/useFormCreateCopy'
import { options } from './constants'
import { createCopyReaderStream } from '../../../services/createCopyReaderStream'

type SelectedCopyType = 'long' | 'short' | null

export function CopyFormGenerator() {
  const [selectStyles] = useSelectStyles()
  const { register, reset, handleSubmit } = useFormCreateCopy()

  const [selectedCopyType, setSelectedCopyType] =
    useState<SelectedCopyType>(null)
  const [, setCopys] = useAtom(requestedCopyAtom)
  const [, setCreatedCopy] = useAtom(createdCopy)
  const [isLoadingRequestCopy, setIsLoadingRequestCopy] =
    useAtom(loadingRequestCopy)
  const [platform, setPlatform] = useState('')
  const { toastError, toastSuccess, simpleToast } = useToast()

  async function onSubmit(fields: CreateCopyFormProperties) {
    try {
      if (!selectedCopyType) {
        simpleToast('Selecione o tamanho da copy por favor')
        return
      }
      setIsLoadingRequestCopy(true)

      const response = await createCopyReaderStream({
        copy: fields.copy,
        title: fields.title,
        platform,
        selectedCopyType,
      })

      const reader = response.getReader()

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
    <S.Container>
      <header>
        <h3>Que tal produzirmos uma copy persuasiva?</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} role="form">
        <S.Col>
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
        </S.Col>

        <S.Col>
          <label>Nos diga o nome do seu serviço ou produto</label>
          <input
            type="text"
            placeholder="Digite aqui..."
            {...register('title')}
          />
        </S.Col>

        <S.Col>
          <label>
            Agora me de o máximo de detalhes possíveis sobre o seu produto e/ou
            serviço
          </label>
          <textarea
            placeholder="Fale sobre o que você vende, os benefícios, seu diferencial do concorrente, como o produto/serviço pode resolver problemas ou atender às necessidades do público-alvo. Separe cada informação por linha!"
            {...register('copy')}
          />
        </S.Col>
        <S.Flex>
          <S.ButtonCopy
            isActive={selectedCopyType === 'long'}
            onClick={() => setSelectedCopyType('long')}
          >
            <BiMenu size={22} />
            <span>Copy longa</span>
          </S.ButtonCopy>
          <S.ButtonCopy
            isActive={selectedCopyType === 'short'}
            onClick={() => setSelectedCopyType('short')}
          >
            <BiMenuAltLeft size={22} />
            <span>Copy curta</span>
          </S.ButtonCopy>
        </S.Flex>
        <footer>
          <Button variant="solid" disabled={isLoadingRequestCopy}>
            Gerar minha copy
          </Button>
        </footer>
      </form>
    </S.Container>
  )
}
