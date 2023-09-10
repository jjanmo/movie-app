import styled from 'styled-components'

const TOP_BAR_HEIGHT = 60
const BOTTOM_NAV_HEIGHT = 56

export const ContentWrapper = styled.section`
  height: calc(100vh - (${TOP_BAR_HEIGHT}px + ${BOTTOM_NAV_HEIGHT}px));
  overflow-y: auto;
`
export const Content = styled.ul`
  width: 100%;
  padding: 2rem 0 3rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 18rem);
  gap: 2rem;
`
