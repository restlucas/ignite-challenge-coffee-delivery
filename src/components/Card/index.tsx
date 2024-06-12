import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../contexts/CartContext'
import { Coffee } from '../../reducers/cart/reducer'
import { QuantityInput } from '../Form/QuantityInput'
import {
  ButtonCart,
  CardContainer,
  CoffeeImage,
  Control,
  Description,
  Price,
  Quantity,
  Tags,
  Title,
} from './styles'

export function Card({ id, name, description, price, image, tags }: Coffee) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useContext(CartContext)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity !== 1) setQuantity((state) => state - 1)
  }

  function handleAddItemToCart(id: number) {
    addItem({ id, quantity, price })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardContainer>
      <CoffeeImage src={image} alt="" />

      <Tags>
        {tags?.map((tag, index) => {
          return <span key={index}>{tag}</span>
        })}
      </Tags>

      <Title>{name}</Title>

      <Description>{description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{price}</span>
        </Price>

        <Quantity>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <ButtonCart
            className={isItemAdded ? `added` : undefined}
            onClick={() => handleAddItemToCart(id)}
          >
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} />
            ) : (
              <ShoppingCart weight="fill" size={18} />
            )}
          </ButtonCart>
        </Quantity>
      </Control>
    </CardContainer>
  )
}
