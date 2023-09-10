import { Link, useLocation } from 'react-router-dom'
import { FavoritesIcon, HomeIcon } from '@components/Icons'
import * as S from './BottomBar.style'
import { colors } from '@styles/theme'

export default function BottomBar() {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Links>
        <S.LinkItem>
          <Link to="/">
            <HomeIcon size={30} color={pathname === '/' ? colors.red02 : colors.white} />
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to="/favorites">
            <FavoritesIcon size={30} color={pathname === '/favorites' ? colors.red02 : colors.white} />
          </Link>
        </S.LinkItem>
      </S.Links>
    </S.Container>
  )
}
