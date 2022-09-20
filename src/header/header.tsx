import { ChangeEvent, RefObject } from 'react'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
}

function Header ({ inputRef, onChangeTitle, title }: HeaderProps) {
  return (
    <S.Header>
      <label>
        <S.Input
          type='text'
          name='title'
          id='title'
          value={title}
          placeholder='Adicione um título'
          ref={inputRef}
          onChange={onChangeTitle}
        />
      </label>
    </S.Header>
  )
}

export { Header }
