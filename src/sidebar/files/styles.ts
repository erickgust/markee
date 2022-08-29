import styled, { css } from 'styled-components/macro'
import { fileIcon, fileActiveIcon } from 'ui/icons'

const DefaultButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const RemoveButton = styled(DefaultButton)`
  visibility: hidden;
  padding: 0 1.5rem;
  height: 100%;
`

export const FileList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
  font-size: 1.6rem;
  padding: 0;
`

type FileItemProps = {
  active: boolean
}

export const FileLink = styled.a`${({ theme }) => css`
  text-decoration: none;
  color: ${theme.colors.gray};
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;

  ::before {
    content: url("${fileIcon}");
    opacity: 0.8;
    position: relative;
    bottom: -2px;
    padding: 0 1rem;
  }
`}`

export const FileItem = styled.li<FileItemProps>`${({ theme, active }) => css`
  display: flex;
  border-radius: 0.5rem;
  height: 4rem;
  cursor: pointer;

  :hover {
    ${RemoveButton} {
      visibility: visible;
    }

    ${FileLink} {
      color: ${theme.colors.white};
    }

    ${FileLink}::before {
      opacity: 1;
    }

    background-color: ${theme.colors.lightBlack};
  }

  ${active && css`
    background-color: ${theme.colors.lightBlack};

    ${FileLink} {
      color: ${theme.colors.white};
    }

    ${FileLink}::before {
      content: url("${fileActiveIcon}");
      opacity: 1;
    }
  `}
`}`
