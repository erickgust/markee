import * as S from './header-styles'

function Header () {
  return (
    <S.Header>
      <label>
        <S.Input
          type='text'
          name='title'
          id='title'
          defaultValue='Sem título'
          placeholder='Adicione um título'
        />
      </label>
    </S.Header>
  )
}

export { Header }
