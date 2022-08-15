import styled, { keyframes } from 'styled-components/macro'
import * as icon from 'sidebar/icons'
import { Status } from './types'

export type StatusIconProps = {
  status: Status
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Saving = styled(icon.Saving)`
  animation: ${rotation} 1s infinite linear;
`

export function StatusIcon ({ status }: StatusIconProps) {
  const Icon = {
    editing: icon.Editing,
    saving: Saving,
    saved: icon.Saved,
  }[status]

  return <Icon />
}

export const CurrentStatus = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
`
