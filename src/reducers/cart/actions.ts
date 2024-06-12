import { Order } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  CREATE_ORDER = 'CREATE_ORDER',
}
export function addItemAction(newItem: any) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newItem,
    },
  }
}

export function removeItemAction(itemId: any) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  }
}

export function incrementQuantityAction(itemId: number) {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementQuantityAction(itemId: number) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      itemId,
    },
  }
}

export function createOrderAction(order: Order) {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: {
      order,
    },
  }
}
