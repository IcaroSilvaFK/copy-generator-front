import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { history } from '../../../mocks/hitory-copy-chat'
import { Container } from './styles'

export function HistoryChats() {
  return (
    <Container>
      <header>
        <h3>Hitórico de copy</h3>
      </header>
      <ul>
        {history.map((historic) => (
          <li key={historic.title}>
            <header>
              <b>{historic.title}</b>
              <span>
                {formatDistanceToNow(new Date(historic.created_at), {
                  locale: ptBr,
                  addSuffix: true,
                })}
              </span>
            </header>
            <p>{historic.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}
