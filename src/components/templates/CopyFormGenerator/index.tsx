import { useTheme } from 'styled-components'
import Select, { StylesConfig } from 'react-select'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { requestedCopyAtom } from '../../../atoms/requestedCopyAtom'
import { loadingRequestCopy } from '../../../atoms/loadingRequestCopy'

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

interface IGeneratedCopyPayload {
  data: {
    copy: {
      description: string
      title: string
      createdAt: string
    }
  }
}

export function CopyFormGenerator() {
  const { colors } = useTheme()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormPropertiesType>({
    defaultValues: {
      copy: '',
      title: '',
    },
    resolver: zodResolver(schema),
  })
  const [selectedCopyType, setSelectedCopyType] = useState<SelectedCopyType>(null)
  const [copys, setCopys] = useAtom(requestedCopyAtom)
  const [isLoadingRequestCopy, setIsLoadingRequestCopy] = useAtom(loadingRequestCopy)
  const [platform, setPlatform] = useState('')

  useEffect(() => {
    if (errors.title || errors.copy) {
      toast.error(
        `O campo ${errors.title ? 'nome' : 'descrição'} precisa ser preenchido corretamente`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      )
    }
  }, [errors.copy, errors.title])

  const selectStyles: StylesConfig = {
    control(base, { menuIsOpen }) {
      return {
        ...base,
        'borderColor': colors.gray[100],
        'boxShadow': `0 0 0 1px ${menuIsOpen ? colors.black : 'transparent'}`,
        ':hover': {
          borderColor: colors.gray[100],
        },
      }
    },

    option(base, { isFocused }) {
      return {
        ...base,
        'backgroundColor': isFocused ? colors.black : 'transparent',
        'color': isFocused ? colors.white : colors.black,
        ':hover': {
          background: colors.black,
          color: colors.white,
        },
        ':active': {
          background: colors.black,
        },
      }
    },
    singleValue(base) {
      return {
        ...base,
        'alignItems': 'center',
        'display': 'flex',

        ':before': {
          borderRadius: 10,
          content: '" "',
          display: 'block',
          marginRight: 8,
          height: 10,
          width: 10,
        },
      }
    },
  }

  async function onSubmit(data: FormPropertiesType) {
    try {
      if (!selectedCopyType) {
        toast('Selecione o tamanho da copy por favor.', {
          position: toast.POSITION.TOP_CENTER,
          draggable: true,
        })
        return
      }
      setIsLoadingRequestCopy(true)
      const payload = {
        prompt: data.copy,
        title: data.title,
        maxToken: selectedCopyType === 'long' ? 500 : 200,
        platform,
      }

      const response: IGeneratedCopyPayload = await (
        await fetch('/api/generate/copy', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(payload),
        })
      ).json()
      setCopys([...copys, response.data.copy])
      toast.success('Copy gerada com sucesso', {
        position: toast.POSITION.TOP_CENTER,
        draggable: true,
      })
      reset()
    } catch (err) {
      toast.error('Erro ao gerar o copy por favor tente novamente', {
        position: toast.POSITION.TOP_CENTER,
        draggable: true,
      })
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
          <input type="text" placeholder="Digite aqui..." {...register('title')} />
        </Col>

        <Col>
          <label>Agora me de o máximo de detalhes possíveis sobre o sue produto e/ou serviço</label>
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
