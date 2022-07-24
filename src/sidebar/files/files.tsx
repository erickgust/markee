import removeIcon from 'sidebar/icons/remove.svg'
import { CurrentStatus, StatusIcon } from 'sidebar/status-icon'
import * as S from './styles'

type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

const files: File[] = [
  {
    id: '1',
    name: 'README.md',
    content: 'Readme',
    active: false,
    status: 'saved',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: 'Contributing',
    active: false,
    status: 'saved',
  },
  {
    id: '3',
    name: 'LICENSE.md',
    content: 'License',
    active: false,
    status: 'saved',
  },
  {
    id: '4',
    name: 'Links.md',
    content: 'Links',
    active: true,
    status: 'saving',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: 'Roadmap',
    active: true,
    status: 'editing',
  },
]

function Files () {
  return (
    <S.FileList>
      {files.map(file => (
        <S.FileItem key={file.id} active={file.active}>
          <S.FileLink href={`/file/${file.id}`}>
            {file.name}
          </S.FileLink>

          {!file.active && (
            <S.RemoveButton type='button'>
              <img src={removeIcon} alt='Remove' />
            </S.RemoveButton>
          )}

          {file.active && (
            <CurrentStatus>
              <StatusIcon status={file.status} />
            </CurrentStatus>
          )}
        </S.FileItem>
      ))}
    </S.FileList>
  )
}

export { Files }