import styled from 'styled-components'
import { colors } from '@styles/theme'

const TOP_BAR_HEIGHT = 60
const BOTTOM_NAV_HEIGHT = 56

export const ContentWrapper = styled.section`
  height: calc(100vh - (${TOP_BAR_HEIGHT}px + ${BOTTOM_NAV_HEIGHT}px));
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Content = styled.ul`
  width: 100%;
  padding: 2rem 0 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 18rem);
  gap: 2rem;
`
export const Keyword = styled.h3`
  width: 100%;
  padding: 1.5rem 0;
  font-size: 2rem;
  text-align: center;
  color: ${colors.white};
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
export const MoreLoader = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`
export const InitialLoader = styled(MoreLoader)`
  height: 100%;
  padding-bottom: 10rem;
  margin: 0;
  align-items: center;
`
