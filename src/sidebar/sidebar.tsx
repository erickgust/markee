import styled from 'styled-components/macro'
import { Files } from './files'

const SidebarStyled = styled.aside`
  max-width: 33rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3.2rem;
`

function Sidebar () {
  return (
    <SidebarStyled>
      <Files />
    </SidebarStyled>
  )
}

export { Sidebar }
