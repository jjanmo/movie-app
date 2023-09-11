import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import BottomNav from '@components/BottomNav'
import { colors } from '@styles/theme'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Main>
        {children}

        <BottomNav />
      </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(179.59deg, rgb(11, 185, 247) 11.88%, rgb(255, 255, 255) 100.6%);
  overflow: hidden;
`
const Main = styled.main`
  position: relative;
  max-width: 42rem;
  height: 100vh;
  margin: 0 auto;
  background-color: ${colors.black};
`
