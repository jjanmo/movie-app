import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Container = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
export const Links = styled.ul`
  display: flex;
  width: 100%;
  height: 6rem;
  background: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
`
export const LinkItem = styled.li`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-top: 1px solid ${colors.white};
    border-right: 0.5px solid ${colors.white};
  }
  &:last-child {
    border-top: 1px solid ${colors.white};
    border-left: 0.5px solid ${colors.white};
  }
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
