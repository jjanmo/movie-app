import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`
export const FavoritesButton = styled.button`
  all: unset;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
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
  &.title {
  }
  &.year {
  }
  &.type {
  }
`
