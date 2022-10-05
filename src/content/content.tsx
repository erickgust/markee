import { ChangeEvent } from 'react'
import * as S from './content-styles'
import { marked } from 'marked'
import { sanitize } from 'dompurify'

import 'highlight.js/styles/github-dark.css'

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

type ContentProps = {
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
  content: string
}

function Content ({ onChangeContent, content }: ContentProps) {
  return (
    <S.Content>
      <S.Textarea
        name='editor'
        id='editor'
        placeholder='Digite aqui seu markdown'
        value={content}
        onChange={onChangeContent}
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
