import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

export interface CartItem {
  id: number
  price: number
  quantity: number
}

export interface Order {
  address: {
    cep: string
    street: string
    number: string
    fullAddress: string | null
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod: string
}

export interface CartState {
  items: CartItem[]
  order: Order[]
  totalPrice: number
  amountItems: number
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.newItem],
        totalPrice:
          state.totalPrice +
          action.payload.newItem.price * action.payload.newItem.quantity,
        amountItems: state.amountItems + action.payload.newItem.quantity,
      }

    case ActionTypes.INCREMENT_ITEM: {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })

      const { totalPrice, amountItems } = updatedItems.reduce(
        (acc, item) => {
          if (item) {
            acc.totalPrice += item.price * item.quantity
            acc.amountItems += item.quantity
          }
          return acc
        },
        {
          totalPrice: 0,
          amountItems: 0,
        },
      )

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        amountItems,
      }

      // Código alternativo

      // const itemIndex = state.items.findIndex(
      //   (item) => item.id === action.payload.itemId,
      // )
      // // Clone o item e atualize sua quantidade
      // const updatedItem = {
      //   ...state.items[itemIndex],
      //   quantity: state.items[itemIndex].quantity + 1,
      // }

      // // Crie uma nova lista de itens com o item atualizado
      // const updatedItems = [
      //   ...state.items.slice(0, itemIndex),
      //   updatedItem,
      //   ...state.items.slice(itemIndex + 1),
      // ]

      // // Atualize totalPrice e amountItems
      // const totalPrice = state.totalPrice + updatedItem.price
      // const amountItems = state.amountItems + 1

      // return {
      //   ...state,
      //   items: updatedItems,
      //   totalPrice,
      //   amountItems,
      // }
    }

    case ActionTypes.DECREMENT_ITEM: {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      })

      const { totalPrice, amountItems } = updatedItems.reduce(
        (acc, item) => {
          if (item) {
            acc.totalPrice += item.price * item.quantity
            acc.amountItems += item.quantity
          }
          return acc
        },
        {
          totalPrice: 0,
          amountItems: 0,
        },
      )

      return {
        ...state,
        items: updatedItems,
        totalPrice,
        amountItems,
      }
    }

    case ActionTypes.REMOVE_ITEM: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      const newItems = [
        ...state.items.slice(0, itemIndex),
        ...state.items.slice(itemIndex + 1),
      ]

      return {
        ...state,
        items: newItems,
        totalPrice:
          state.totalPrice -
          state.items[itemIndex].price * state.items[itemIndex].quantity,
        amountItems: state.amountItems - state.items[itemIndex].quantity,
      }
    }

    case ActionTypes.CREATE_ORDER: {
      return {
        ...state,
        order: action.payload.order,
      }
    }
  }
}
