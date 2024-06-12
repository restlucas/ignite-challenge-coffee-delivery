import { ReactNode } from 'react'

import { ItemContainer } from './styles'

interface ItemsProps {
  color: string
  icon: ReactNode
  children: ReactNode
}

export function Items({ color, icon, children }: ItemsProps) {
  return (
    <ItemContainer>
      <div style={{ backgroundColor: color }}>{icon}</div>
      {children}
    </ItemContainer>
  )
}
