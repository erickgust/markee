import { Files } from './files'
import markeeLogo from './markee-logo.svg'
import * as S from './sidebar-styles'

function Sidebar () {
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

      <S.NewFileButton>Adicionar arquivo</S.NewFileButton>

      <Files />
    </S.Aside>
  )
}

export { Sidebar }
