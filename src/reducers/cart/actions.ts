import { ICoffee } from '../../context/AppContext'

export enum CartReducerActionsEnum {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY',
}

export function addItemToCartAction(coffee: ICoffee, quantity: number) {
  return {
    type: CartReducerActionsEnum.ADD_ITEM_TO_CART,
    payload: {
      coffee,
      quantity,
    },
  }
}

export function removeItemFromCartAction(coffeeId: string) {
  return {
    type: CartReducerActionsEnum.REMOVE_ITEM_FROM_CART,
    payload: {
      coffeeId,
    },
  }
}

export function updateCartItemQuantityAction(
  coffeeId: string,
  quantity: number
) {
  return {
    type: CartReducerActionsEnum.UPDATE_CART_ITEM_QUANTITY,
    payload: {
      coffeeId,
      quantity,
    },
  }
}
