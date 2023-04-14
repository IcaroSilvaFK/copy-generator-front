import styled from 'styled-components'

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 22px;

  header {
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 0.875rem;
  }

  border-radius: 0 12px 12px;
`
