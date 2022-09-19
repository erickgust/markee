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

type FileInfo = Pick<File, 'name' | 'content' | 'status'>

function App () {
  const initialFileInfo: FileInfo = {
    name: 'Sem título',
    content: '',
    status: 'saved',
  }

  const inputRef = useRef<HTMLInputElement>(null)
  const [fileInfo, setFileInfo] = useState(initialFileInfo)
  const [files, setFiles] = useState<File[]>([])

  const handleNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({ ...file, active: false }))
      .concat({
        id: v4(),
        active: true,
        ...initialFileInfo,
      }),
    )

    setFileInfo({ ...initialFileInfo })
  }

  const handleSelectFile = useCallback((id: string) => (e: MouseEvent) => {
    e.preventDefault()

    const file = files.find(file => file.id === id)

    if (!file) return

    setFiles(files => (
      files.map(file => ({ ...file, active: file.id === id }))
    ))

    setFileInfo(fileInfo => ({
      ...fileInfo,
      name: file.name,
      content: file.content,
    }))
  }, [files])

  const handleChange = useCallback((type: keyof FileInfo) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFileInfo(file => ({
        ...file,
        status: 'editing',
        [type]: e.target.value,
      }))

      if (fileInfo.status === 'saved') {
        handleActiveFile({ status: 'editing' })
      }
    }
  }, [fileInfo.status])

  const handleFileSave = useCallback((fileProps: Partial<FileInfo>) => {
    handleActiveFile(fileProps)
    setFileInfo(fileInfo => ({ ...fileInfo, ...fileProps }))
  }, [])

  const handleRemoveFile = useCallback((id: string) => {
    setFiles(files => files.filter(file => file.id !== id))
  }, [])

  function handleActiveFile (fileProps: Partial<FileInfo>) {
    setFiles(files => (
      files.map(file => (
        file.active
          ? { ...file, ...fileProps }
          : file
      ))
    ))
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (fileInfo.status === 'editing') {
      timer = setTimeout(() => {
        handleFileSave({ status: 'saving' })

        setTimeout(() => {
          handleFileSave({ ...fileInfo, status: 'saved' })
        }, 300)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [handleFileSave, fileInfo])

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleNewFile}
        onSelectFile={handleSelectFile}
        onDeleteFile={handleRemoveFile}
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
