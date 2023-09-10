import { Link, useLocation } from 'react-router-dom'

import * as S from './BottomNav.style'
import { colors } from '@styles/theme'
import { AiFillHome, AiFillStar } from 'react-icons/ai'

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Links>
        <S.LinkItem>
          <Link to="/">
            <AiFillHome size={30} color={pathname === '/' ? colors.red02 : colors.white} />
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/favorites">
            <AiFillStar size={30} color={pathname === '/favorites' ? colors.red02 : colors.white} />
          </Link>
        </S.LinkItem>
      </S.Links>
    </S.Container>
  )
}
