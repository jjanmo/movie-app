import styled from 'styled-components'
import { BOTTOM_NAV_HEIGHT, TOP_SEARCH_BAR_HEIGHT } from '@styles/constants'
import { colors } from '@styles/theme'

export const Container = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 42rem;
  height: calc(100vh - (${TOP_SEARCH_BAR_HEIGHT}px + ${BOTTOM_NAV_HEIGHT}px));
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32rem;
  padding: 3rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.5rem;
  background-color: ${colors.white};
`
export const Title = styled.div`
  padding-bottom: 2rem;
  font-size: 1.8rem;
  line-height: 2.6rem;
  word-break: keep-all;

  & .movieTitle {
    font-weight: 600;
    color: ${colors.pink};
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 28rem;
  padding-top: 2rem;
  margin: 0 auto;
`
export const Button = styled.button`
  all: unset;
  width: 48%;
  padding: 1.4rem 0;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  z-index: 10;

  &:hover {
    opacity: 1;
    font-weight: 600;
  }
`
export const RemoveButton = styled(Button)`
  color: ${colors.white};
  background-color: ${colors.red02};
`
export const CancelButton = styled(Button)`
  color: ${colors.black};
  background-color: ${colors.gray05};
`
