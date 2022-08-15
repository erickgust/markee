import { CurrentStatus, StatusIcon } from './status-icon'
import { RemoveIcon } from 'sidebar/icons'
import * as S from './styles'
import { File } from './types'

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
              <RemoveIcon />
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
