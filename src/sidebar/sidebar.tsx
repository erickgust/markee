import { Files } from './files'
import { File } from './files/types'
import markeeLogo from './markee-logo.svg'
import * as S from './sidebar-styles'

type SidebarProps = {
  onNewFile: () => void
  files: File[]
}

function Sidebar ({ files, onNewFile }: SidebarProps) {
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

      <Files files={files} />
    </S.Aside>
  )
}

export { Sidebar }
