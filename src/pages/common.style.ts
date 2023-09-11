import styled from 'styled-components'
import { BOTTOM_NAV_HEIGHT, TOP_SEARCH_BAR_HEIGHT } from '@styles/constants'
import { colors } from '@styles/theme'

export const ContentWrapper = styled.section`
  height: calc(100vh - (${TOP_SEARCH_BAR_HEIGHT}px + ${BOTTOM_NAV_HEIGHT}px));
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Content = styled.ul`
  width: 100%;
  padding: 2rem 1.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const Notice = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  color: ${colors.gray01};
`
