import styled from 'styled-components/macro'
import { Files } from './files'
import markeeLogo from './markee-logo.svg'

const SidebarStyled = styled.aside`
  text-align: center;
  max-width: 33rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3.2rem;
`

function Sidebar () {
  return (
    <SidebarStyled>
      <h1>
        <a href='/'>
          <img src={markeeLogo} alt='Markee.' />
        </a>
      </h1>
      <Files />
    </SidebarStyled>
  )
}

export { Sidebar }
