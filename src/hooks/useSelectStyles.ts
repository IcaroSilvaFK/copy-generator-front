import { StylesConfig } from 'react-select'
import { useTheme } from 'styled-components'

export function useSelectStyles() {
  const { colors } = useTheme()

  const styles: StylesConfig = {
    control(base, { menuIsOpen }) {
      return {
        ...base,
        borderColor: colors.gray[100],
        boxShadow: `0 0 0 1px ${menuIsOpen ? colors.black : 'transparent'}`,
        ':hover': {
          borderColor: colors.gray[100],
        },
      }
    },

    option(base, { isFocused }) {
      return {
        ...base,
        backgroundColor: isFocused ? colors.black : 'transparent',
        color: isFocused ? colors.white : colors.black,
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
        alignItems: 'center',
        display: 'flex',

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

  return [styles]
}
