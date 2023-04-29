import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);

  header h3 {
    color: ${({ theme }) => theme.colors.blue[500]};
    font-size: 1.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;

  button {
    align-self: flex-end;
  }
`
