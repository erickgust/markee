import styled, { css } from 'styled-components/macro'
import { plusIcon } from 'ui/icons'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 33rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sidebar.black};
  padding: 3.2rem;
`

export const H1 = styled.h1`
  text-align: center;
`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.sidebar.white};
  position: relative;
  padding-left: 2rem;
  font-size: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    border-bottom: 2px solid ${theme.colors.sidebar.primary};
    border-radius: 5px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  > span {
    background-color: ${theme.colors.sidebar.black};
    position: relative;
    padding: 0 1rem;
  }
`}`

export const NewFileButton = styled.button`${({ theme }) => css`
  background-color: ${theme.colors.sidebar.primary};
  color: ${theme.colors.sidebar.black};
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background 150ms ease;

  ::before {
    content: url("${plusIcon}");
    position: relative;
    padding-right: 1rem;
  }

  :hover {
    background-color: ${theme.colors.sidebar.primaryDark};
  }
`}`
