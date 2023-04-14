import { useTheme } from 'styled-components'
import { ButtonCopy, Col, Container, Flex } from './styles'
import Select, { StylesConfig } from 'react-select'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { BiMenu, BiMenuAltLeft } from 'react-icons/bi'
import { useAtom } from 'jotai'
import { requestedCopyAtom } from '../../../atoms/requestedCopyAtom'

const options = [
  {
    value: 'Facebook Ads, TikTok Ads, e Twitter Ads',
    label: 'Facebook Ads, TikTok Ads, e Twitter Ads',
  },
  { value: 'Google Ads', label: 'Google Ads' },
]

interface IFormProps {
  title: string
  copy: string
}

type SelectedCopyType = 'long' | 'short' | null

interface IGeneratedCopyPayload {
  copy: {
    description: string
    title: string
  }[]
}

export function CopyFormGenerator() {
  const { colors } = useTheme()
  const { register, handleSubmit } = useForm<IFormProps>()
  const [selectedCopyType, setSelectedCopyType] = useState<SelectedCopyType>(null)
  const [copys, setCopys] = useAtom(requestedCopyAtom)

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

  async function onSubmit(data: IFormProps) {
    const payload = {
      prompt: data.copy,
      title: data.title,
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
    console.log(response.copy)
    // setCopys([...copys, ...response.copy])
  }

  return (
    <Container>
      <header>
        <h3>Que tal produzirmos uma copy persuasiva?</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col>
          <label>Para qual plataforma irá usar a copy?</label>
          <Select options={options} styles={selectStyles} placeholder="Selecione uma opção" />
        </Col>

        <Col>
          <label>Para qual plataforma irá usar a copy?</label>
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
        <button>Gerar minha copy</button>
      </form>
    </Container>
  )
}
