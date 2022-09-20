import { MouseEvent } from 'react'
import { Files } from './files'
import { File } from './files/types'
import markeeLogo from './markee-logo.svg'
import * as S from './sidebar-styles'

type SidebarProps = {
  files: File[]
  onNewFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onDeleteFile: (id: string) => void
}

function Sidebar ({ files, onNewFile, onSelectFile, onDeleteFile }: SidebarProps) {
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

      <S.NewFileButton onClick={onNewFile}>Adicionar arquivo</S.NewFileButton>

      <Files
        files={files}
        onSelectFile={onSelectFile}
        onDeleteFile={onDeleteFile}
      />
    </S.Aside>
  )
}

export { Sidebar }
