import { useFiles } from 'resources/files/use-files'
import { Header } from 'header'
import { Content } from 'content'
import { Sidebar } from 'sidebar'
import styled from 'styled-components/macro'

const Main = styled.main`
  display: flex;
  height: 100vh;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`

function App () {
  const {
    handleChange,
    handleNewFile,
    handleRemoveFile,
    handleSelectFile,
    fileInfo,
    files,
    inputRef,
  } = useFiles()

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
