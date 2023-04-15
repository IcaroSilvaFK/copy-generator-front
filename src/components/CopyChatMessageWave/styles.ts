import styled from 'styled-components'

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 22px;

  cursor: copy;

  header {
    color: ${({ theme }) => theme.colors.black};

    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;

    span {
      color: ${({ theme }) => theme.colors.blue[500]};
      flex-shrink: 0;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.black};
    font-size: 0.875rem;
    margin-top: 8px;
  }

  border-radius: 0 12px 12px;
`
