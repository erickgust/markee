import { HeaderHeight } from 'header/header-styles'
import styled from 'styled-components/macro'

const Padding = '2rem'

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - ${HeaderHeight});

  font-weight: 500;
  font-size: 1.6rem;
  font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  color: ${({ theme }) => theme.colors.text};
`

export const Textarea = styled.textarea`
  background: none;
  border: none;
  resize: none;
  padding: ${Padding};
  padding-left: 0;
  color: currentColor;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }
`

export const Div = styled.div`
  background: none;
  overflow-wrap: break-word;
  overflow: auto;
  padding: ${Padding};
  padding-right: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.separator};
    width: 2px;
    left: 0;
    height: calc(100% - ${Padding} * 2);
  }

  & > h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  & > pre {
    background-color: #1E293B;
    color: #FAFAFA;
    border-radius: 0.5rem;
    padding: 1rem;
  }
`
