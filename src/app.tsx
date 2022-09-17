import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Content } from 'content'
import { Header } from 'header'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'
import { v4 } from 'uuid'
import { File } from 'sidebar/files/types'

const Main = styled.main`
  display: flex;
  height: 100vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

function App () {
  const initialTitle = 'Sem título'
  const inputRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState('')
  const [editing, setEditing] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({ ...file, active: false }))
      .concat({
        id: v4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }),
    )
  }

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
    setEditing(true)
  }, [])

  const handleChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value)
    setEditing(true)
  }, [])

  const handleFileSave = useCallback((title: string, content: string) => {
    setFiles(files => (
      files.map(file => {
        if (file.active) {
          return {
            ...file,
            name: title || initialTitle,
            content,
          }
        }

        return file
      })
    ))
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (editing) {
      timer = setTimeout(() => {
        handleFileSave(title, content)
        setEditing(false)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [title, content, editing, handleFileSave])

  return (
    <Main>
      <Sidebar files={files} onNewFile={handleNewFile} />
      <Section>
        <Header
          inputRef={inputRef}
          onChangeTitle={handleChangeTitle}
          title={title}
        />
        <Content
          onChangeContent={handleChangeContent}
          content={content}
        />
      </Section>
    </Main>
  )
}

export { App }
