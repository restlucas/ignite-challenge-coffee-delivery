import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './styles'

interface QuantityProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityProps) {
  return (
    <Container>
      <button onClick={() => decrementQuantity()}>
        <Minus />
      </button>
      <input type="number" value={quantity} readOnly />
      <button onClick={() => incrementQuantity()}>
        <Plus />
      </button>
    </Container>
  )
}
