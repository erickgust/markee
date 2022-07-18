import styled, { css } from 'styled-components/macro'

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary}
`}`

function App () {
  return (
    <Title>App</Title>
  )
}

export { App }
