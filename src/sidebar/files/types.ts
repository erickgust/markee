export type Status = 'saving' | 'saved' | 'editing'

export type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}
