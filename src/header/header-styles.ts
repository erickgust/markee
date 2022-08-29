import styled, { css } from 'styled-components/macro'
import { fileActiveIcon } from 'ui/icons'

export const Input = styled.input`${({ theme }) => css`
  background: url(${fileActiveIcon}) left calc(50% - 1px) no-repeat;
  border: none;

  color: ${theme.colors.black};
  font-size: 1.8rem;
  font-weight: 500;

  padding: .5rem;
  padding-left: 3.2rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`}`

export const HeaderHeight = '50px'

export const Header = styled.header`
  display: flex;
  height: ${HeaderHeight};
  align-items: center;
  width: 100%;
`
