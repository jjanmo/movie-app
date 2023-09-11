import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import useKeyword from '@store/search/useKeyword'
import { colors } from '@styles/theme'
import * as S from './SearchBar.style'

export default function SearchBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const { setKeyword, resetKeyword } = useKeyword()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return

    if (pathname !== '/') navigate('/')

    setValue('')
    setKeyword(value)
  }

  const handleClickLogo = () => {
    resetKeyword()
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <Link to="/" onClick={handleClickLogo}>
          <img src="/logo.png" />
        </Link>
      </S.LogoContainer>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.Input type="text" value={value} onChange={handleChange} autoFocus placeholder="검색" />
        <S.Button>
          <FiSearch size={25} color={colors.black} strokeWidth={2} />
        </S.Button>
      </S.FormContainer>
    </S.Container>
  )
}
