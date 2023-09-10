import { colors } from '@styles/theme'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(179.59deg, rgb(11, 185, 247) 11.88%, rgb(255, 255, 255) 100.6%);
`
const Main = styled.main`
  width: 42rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${colors.black};
`
