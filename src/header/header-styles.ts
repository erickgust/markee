import styled, { css } from 'styled-components/macro'
import { fileActiveIcon } from 'ui/icons'

export const Input = styled.input`${({ theme }) => css`
  background: url(${fileActiveIcon}) left calc(50% - 1px) no-repeat;
  border: none;

  color: ${theme.text};
  font-size: 1.8rem;
  font-weight: 500;

  padding: .5rem;
  padding-left: 3.2rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${theme.text};
    opacity: 0.6;
  }
`}`

type ButtonType = {
  isDarkTheme: boolean
}

const iconSize = '2.24rem'

export const Button = styled.button<ButtonType>`${({ theme, isDarkTheme }) => css`
  border: none;
  cursor: pointer;
  position: relative;

  background-color: ${theme.separator};
  transition: .4s;
  border-radius: 4.8rem;
  width: 5.6rem;
  height: 3.2rem;

  &::before {
    position: absolute;
    content: '';
    height: ${iconSize};
    width: ${iconSize};
    border-radius: 50%;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: .4s;
    }

    ${isDarkTheme && css`
      &::before {
        left: calc(100% - (${iconSize} + 0.5rem));
        background: ${theme.separator};
        box-shadow:
          inset -3px -2px 5px -2px #8983f7,
          inset -10px -4px 0 0 #a3dafb
        ;
      }
    `}

    > span {
      visibility: hidden;
    }
`}`

export const HeaderHeight = '50px'

export const Header = styled.header`
  display: flex;
  height: ${HeaderHeight};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
