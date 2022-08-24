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
      <Header />
    </Main>
  )
}

export { App }
