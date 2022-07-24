import styled, { css } from 'styled-components/macro'
import { Files } from './files'
import markeeLogo from './markee-logo.svg'

const SidebarStyled = styled.aside`
  max-width: 33rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3.2rem;
`

const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  position: relative;
  padding-left: 2rem;
  font-size: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    border-bottom: 2px solid ${theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  > span {
    background-color: ${theme.colors.black};
    position: relative;
    padding: 0 1rem;
  }
`}`

function Sidebar () {
  return (
    <SidebarStyled>
      <h1 style={{ textAlign: 'center' }}>
        <a href='/'>
          <img src={markeeLogo} alt='Markee.' />
        </a>
      </h1>

      <H2>
        <span>
          Arquivos
        </span>
      </H2>
      <Files />
    </SidebarStyled>
  )
}

export { Sidebar }
