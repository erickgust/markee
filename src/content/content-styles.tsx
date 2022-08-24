import styled from 'styled-components/macro'

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 40px);

  font-weight: 500;
  font-size: 1.6rem;
  font-family: 'Inconsolata', 'Courier New', Courier, monospace;
  color: ${({ theme }) => theme.colors.black};
`

export const Textarea = styled.textarea`
  background: none;
  border: none;
  resize: none;
  padding: 2rem;
  color: currentColor;

  &:focus {
    outline: none;
  }
`

export const Div = styled.div`
  background: none;
  overflow-wrap: break-word;
  overflow: auto;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.gray};
    width: 2px;
    left: 0;
    height: calc(100% - 50px);
  }
  `
