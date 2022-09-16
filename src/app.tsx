import { useRef } from 'react'
import { Content } from 'content'
import { Header } from 'header'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'

const Main = styled.main`
  display: flex;
  height: 100vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Main>
      <Sidebar inputRef={inputRef} />
      <Section>
        <Header inputRef={inputRef} />
        <Content />
      </Section>
    </Main>
  )
}

export { App }
