import { BsGearFill } from 'react-icons/bs'

import * as S from './styles'

export function Maintenance() {
  return (
    <S.Container>
      <b>Em manutenção</b>
      <BsGearFill size={42} />
    </S.Container>
  )
}
