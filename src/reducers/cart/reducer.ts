import { ICartItem } from '../../context/AppContext'
import { CartReducerActionsEnum } from './actions'

export interface ICartState {
  cart: ICartItem[]
}

interface ICartReducerAction {
  type: string
  payload?: any
}

export function cartReducer(
  state: ICartState,
  action: ICartReducerAction
): ICartState {
  switch (action.type) {
    case CartReducerActionsEnum.ADD_ITEM_TO_CART:
      return {
        cart: [
          ...state.cart,
          {
            coffee: action.payload.coffee,
            quantity: action.payload.quantity,
          },
        ],
      }

    case CartReducerActionsEnum.REMOVE_ITEM_FROM_CART:
      return {
        cart: state.cart.filter(
          items => items.coffee.id !== action.payload.coffeeId
        ),
      }

    case CartReducerActionsEnum.UPDATE_CART_ITEM_QUANTITY:
      if (action.payload.quantity === 0) {
        return {
          cart: state.cart.filter(
            items => items.coffee.id !== action.payload.coffeeId
          ),
        }
      }

      return {
        cart: state.cart.map(item => {
          if (item.coffee.id === action.payload.coffeeId) {
            return {
              ...item,
              quantity: action.payload.quantity,
            }
          }

          return item
        }),
      }

    case CartReducerActionsEnum.EMPTY_CART:
      return { cart: [] }

    default:
      return state
  }
}
