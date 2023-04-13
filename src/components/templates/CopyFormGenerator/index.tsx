import { useTheme } from 'styled-components'
import { Col, Container } from './styles'
import Select, { StylesConfig } from 'react-select'
import { useForm } from 'react-hook-form'

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

export function CopyFormGenerator() {
  const { colors } = useTheme()
  const { register, handleSubmit } = useForm<IFormProps>()

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

  function onSubmit(data: IFormProps) {
    console.log({ data })
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
          <textarea placeholder="Digite aqui..." {...register('copy')} />
        </Col>

        <button>Gerar minha copy</button>
      </form>
    </Container>
  )
}
