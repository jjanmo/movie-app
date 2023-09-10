import { Link } from 'react-router-dom'
import * as S from './SearchBar.style'
import { colors } from '@styles/theme'
import { FiSearch } from 'react-icons/fi'

interface Props {
  onSubmit: () => void
}

export default function SearchBar({ onSubmit }: Props) {
  return (
    <S.Container>
      <S.LogoContainer>
        <Link to="/">
          <img src="/logo.png" />
        </Link>
      </S.LogoContainer>

      <S.FormContainer onSubmit={onSubmit}>
        <S.Input type="text" />
        <S.Button>
          <FiSearch size={25} color={colors.black} strokeWidth={2} />
        </S.Button>
      </S.FormContainer>
    </S.Container>
  )
}
