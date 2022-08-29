import * as S from './content-styles'

function Content () {
  return (
    <S.Content>
      <S.Textarea name='editor' id='editor' placeholder='Digite aqui seu markdown' />
      <S.Div>
        <h1>Bootcamp Brainn Co.</h1>
        <p>Lorem ipsum dolor sit amet simet</p>
      </S.Div>
    </S.Content>
  )
}

export { Content }
