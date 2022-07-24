import styled, { keyframes } from 'styled-components'
import { ReactComponent as Editing } from './icons/editing.svg'
import { ReactComponent as SavingIcon } from './icons/saving.svg'
import { ReactComponent as Saved } from './icons/saved.svg'

type StatusIconProps = {
  status: 'saving' | 'saved' | 'editing'
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Saving = styled(SavingIcon)`
  animation: ${rotation} 1s infinite linear;
`

export function StatusIcon ({ status }: StatusIconProps) {
  const Icon = {
    editing: Editing,
    saving: Saving,
    saved: Saved,
  }[status]

  return <Icon />
}

export const CurrentStatus = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
`
