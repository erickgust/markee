import styled, { css } from 'styled-components/macro'
import { fileActiveIcon } from 'ui/icons'

export const Input = styled.input`${({ theme }) => css`
  background: url(${fileActiveIcon}) left calc(50% - 1px) no-repeat;
  border: none;

  color: ${theme.colors.text};
  font-size: 1.8rem;
  font-weight: 500;

  padding: .5rem;
  padding-left: 3.2rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.text};
    opacity: 0.6;
  }
`}`

export const Button = styled.button`
  font-size: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const HeaderHeight = '50px'

export const Header = styled.header`
  display: flex;
  height: ${HeaderHeight};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
