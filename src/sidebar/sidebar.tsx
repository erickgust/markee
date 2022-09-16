import { RefObject, useState } from 'react'
import { v4 } from 'uuid'
import { Files } from './files'
import { File } from './files/types'
import markeeLogo from './markee-logo.svg'
import * as S from './sidebar-styles'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
}

function Sidebar ({ inputRef }: SidebarProps) {
  const [files, setFiles] = useState<File[]>([{
    id: v4(),
    name: 'README.md',
    content: 'Readme',
    active: false,
    status: 'saved',
  },
  {
    id: v4(),
    name: 'CONTRIBUTING.md',
    content: 'Contributing',
    active: false,
    status: 'saved',
  },
  {
    id: v4(),
    name: 'LICENSE.md',
    content: 'License',
    active: false,
    status: 'saved',
  }])

  const handleNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({ ...file, active: false }))
      .concat({
        id: v4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }),
    )
  }

  return (
    <S.Aside>
      <S.H1>
        <a href='/'>
          <img src={markeeLogo} alt='Markee.' />
        </a>
      </S.H1>

      <S.H2>
        <span>Arquivos</span>
      </S.H2>

      <S.NewFileButton onClick={handleNewFile}>Adicionar arquivo</S.NewFileButton>

      <Files files={files} />
    </S.Aside>
  )
}

export { Sidebar }
