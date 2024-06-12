import { createContext, ReactNode, useReducer } from 'react'

import {
  addItemAction,
  createOrderAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { CartItem, cartReducer, Order } from '../reducers/cart/reducer'

export interface CartContextType {
  items: CartItem[]
  order: Order
  totalPrice: number
  amountItems: number
  addItem: (item: CartItem) => void
  removeItem: (itemId: CartItem) => void
  incrementQuantity: (itemId: number) => void
  decrementQuantity: (itemId: number) => void
  createOrder: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    order: {},
    totalPrice: 0,
    amountItems: 0,
  })

  const { items, order, totalPrice, amountItems } = cartState

  function addItem(item: CartItem) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: CartItem) {
    dispatch(removeItemAction(itemId))
  }

  function incrementQuantity(itemId: number) {
    dispatch(incrementQuantityAction(itemId))
  }
  function decrementQuantity(itemId: number) {
    dispatch(decrementQuantityAction(itemId))
  }

  function createOrder(order: Order) {
    dispatch(createOrderAction(order))
  }

  return (
    <CartContext.Provider
      value={{
        items,
        order,
        amountItems,
        addItem,
        removeItem,
        totalPrice,
        incrementQuantity,
        decrementQuantity,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
