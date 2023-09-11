import styled from 'styled-components'

export const Dim = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  transition: transform 0.4s;
`
export const TopDim = styled(Dim)`
  position: absolute;
  top: 0;
  transform-origin: top;
`
export const BottomDim = styled(Dim)`
  top: 50%;
  transform-origin: bottom;
`
export const Info = styled.div`
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  transition: bottom 0.3s 0.5s;

  & .title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    word-break: keep-all;
  }
  & .row {
    display: flex;
    justify-content: space-between;
    & .year {
      width: 50%;
      font-size: 1.2rem;
      text-align: left;
    }
    & .type {
      width: 50%;
      text-align: right;
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }
`
export const Container = styled.li`
  position: relative;
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.4s;

  &:hover {
    transform: scale(1.08);
  }
  &:hover ${TopDim} {
    transform: scaleY(0);
  }
  &:hover ${BottomDim} {
    transform: scaleY(0);
  }
  &:hover ${Info} {
    bottom: 0;
    opacity: 1;
  }
`
export const FavoritesButton = styled.button`
  all: unset;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  padding: 0.3rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
`
export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const EmptyThumbnail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(254, 24, 118, 1) 0%, rgba(252, 114, 149, 1) 43%, rgba(255, 70, 76, 1) 100%);
`
