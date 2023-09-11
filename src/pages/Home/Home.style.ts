import styled from 'styled-components'
import { colors } from '@styles/theme'

export const Keyword = styled.h2`
  width: 100%;
  padding: 2rem 0 1rem;
  font-size: 2rem;
  text-align: center;
  color: ${colors.white};
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
