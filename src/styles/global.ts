import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: none;

    box-shadow:  0 0 0 2px ${({ theme }) => theme.colors.blue[500]};
  }

  body,html,#__next{
    width: 100%;
    height: 100%;

    font-family: ${({ theme }) => theme.fonts.inter};
    color:${({ theme }) => theme.colors.black};
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

  button,input{
    border: 0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }
`
