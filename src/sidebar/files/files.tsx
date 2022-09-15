import { CurrentStatus, StatusIcon } from './status-icon'
import { RemoveIcon } from 'ui/icons'
import * as S from './styles'
import { File } from './types'

type FilesProps = {
  files: File[]
}

function Files ({ files }: FilesProps) {
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
