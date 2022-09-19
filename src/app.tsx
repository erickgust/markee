import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
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

type FileInfo = Pick<File, 'name' | 'content'>

function App () {
  const initialTitle = 'Sem título'
  const inputRef = useRef<HTMLInputElement>(null)

  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: initialTitle,
    content: '',
  })
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

  const handleSelectFile = useCallback((id: string) => (e: MouseEvent) => {
    e.preventDefault()

    const file = files.find(file => file.id === id)

    if (!file) return

    setFiles(files => (
      files.map(file => ({ ...file, active: file.id === id }))
    ))

    setFileInfo({ name: file.name, content: file.content })
  }, [files])

  const handleChange = useCallback((type: keyof FileInfo) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFileInfo(file => ({ ...file, [type]: e.target.value }))
      setEditing(true)
    }
  }, [])

  const handleFileSave = useCallback(({ name, content }: FileInfo) => {
    setFiles(files => (
      files.map(file => {
        if (file.active) {
          return {
            ...file,
            name: name || initialTitle,
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
        handleFileSave(fileInfo)
        setEditing(false)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [editing, handleFileSave, fileInfo])

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleNewFile}
        onSelectFile={handleSelectFile}
      />
      <Section>
        <Header
          inputRef={inputRef}
          onChangeTitle={handleChange('name')}
          title={fileInfo.name}
        />
        <Content
          onChangeContent={handleChange('content')}
          content={fileInfo.content}
        />
      </Section>
    </Main>
  )
}

export { App }
