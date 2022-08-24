import { Content } from 'content'
import { Header } from 'header'
import { Sidebar } from 'sidebar'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  height: 100vh;
`

function App () {
  return (
    <Main>
      <Sidebar />
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Content />
      </section>
    </Main>
  )
}

export { App }
