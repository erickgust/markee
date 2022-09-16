import { RefObject } from 'react'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
}

function Header ({ inputRef }: HeaderProps) {
  return (
    <S.Header>
      <label>
        <S.Input
          type='text'
          name='title'
          id='title'
          defaultValue='Sem título'
          placeholder='Adicione um título'
          ref={inputRef}
        />
      </label>
    </S.Header>
  )
}

export { Header }
