import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { v4 } from 'uuid'
import { File } from 'sidebar/files/types'

type FileInfo = Pick<File, 'name' | 'content' | 'status'>

function useFiles () {
  const initialFileInfo: FileInfo = useMemo(() => ({
    name: 'Sem título',
    content: '',
    status: 'saved',
  }), [])

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
    inputRef.current?.focus()

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
    setFileInfo(fileInfo => ({
      ...fileInfo,
      status: fileProps.status || 'saved',
    }))
  }, [])

  const handleRemoveFile = (id: string) => {
    setFiles(files => files.filter(file => file.id !== id))
  }

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
          handleFileSave({
            ...fileInfo,
            name: fileInfo.name || 'Sem título',
            status: 'saved',
          })
        }, 300)
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [handleFileSave, fileInfo])

  return {
    handleChange,
    handleNewFile,
    handleRemoveFile,
    handleSelectFile,
    files,
    inputRef,
    fileInfo,
  }
}

export { useFiles }
