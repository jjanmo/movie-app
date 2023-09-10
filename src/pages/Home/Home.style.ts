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
  grid-template-columns: repeat(2, 19rem);
  gap: 2rem 1.5rem;
`
export const Movie = styled.li`
  position: relative;
  width: 19rem;
  height: 29rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
`
export const FavoritesButton = styled.button`
  all: unset;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
`
export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const Info = styled.div`
  &.Title {
  }
  &.Year {
  }
  &.Type {
  }
`
