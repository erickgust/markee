import { ChangeEvent, RefObject } from 'react'
import { useToggleTheme } from 'resources/theme/use-theme'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
}

function Header ({ inputRef, onChangeTitle, title }: HeaderProps) {
  const { theme, handleToggleTheme } = useToggleTheme()

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

      <S.Button
        onClick={handleToggleTheme}
        isDarkTheme={theme === 'dark'}
        type='button'
      >
        <span>{theme === 'dark' ? 'Dark mode' : 'Light mode'}</span>
      </S.Button>
    </S.Header>
  )
}

export { Header }
