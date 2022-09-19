import { CurrentStatus, StatusIcon } from './status-icon'
import { RemoveIcon } from 'ui/icons'
import * as S from './styles'
import { File } from './types'
import { MouseEvent } from 'react'

type FilesProps = {
  files: File[]
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onDeleteFile: (id: string) => void
}

function Files ({ files, onSelectFile, onDeleteFile }: FilesProps) {
  return (
    <S.FileList>
      {files.map(file => (
        <S.FileItem key={file.id} active={file.active}>
          <S.FileLink href={`/file/${file.id}`} onClick={onSelectFile(file.id)}>
            {file.name}
          </S.FileLink>

          {!file.active && (
            <S.RemoveButton
              type='button'
              onClick={() => onDeleteFile(file.id)}
            >
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
