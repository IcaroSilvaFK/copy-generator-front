import * as S from './styles'

interface IEmptyChatProps {
  message: string
}

export function EmptyChat(props: IEmptyChatProps) {
  const { message } = props

  return (
    <S.EmptyCopyContainer>
      <img src="/assets/empty-copy.svg" alt="Empty copy" />
      <div>
        <span>&quot;{message}&quot;</span>
      </div>
    </S.EmptyCopyContainer>
  )
}
