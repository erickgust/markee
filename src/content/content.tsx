import { ChangeEvent, useState } from 'react'
import * as S from './content-styles'
import { marked } from 'marked'
import { sanitize } from 'dompurify'

import 'highlight.js/styles/github.css'

import('highlight.js').then(({ default: hljs }) => {
  marked.setOptions({
    highlight: (code, language) => {
      if (language && hljs.getLanguage(language)) {
        return hljs.highlight(code, { language }).value
      }

      return hljs.highlightAuto(code).value
    },
  })
})

function Content () {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value)
  }

  return (
    <S.Content>
      <S.Textarea
        name='editor'
        id='editor'
        placeholder='Digite aqui seu markdown'
        value={content}
        onChange={handleChange}
      />
      <S.Div
        dangerouslySetInnerHTML={{
          __html: sanitize(marked.parse(content)),
        }}
      />
    </S.Content>
  )
}

export { Content }
