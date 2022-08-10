import { createContext, ReactNode, useReducer, useState } from 'react'

import db from '../../db.json'
import {
  addItemToCartAction,
  removeItemFromCartAction,
  updateCartItemQuantityAction,
} from '../reducers/cart/actions'
import { cartReducer, ICartState } from '../reducers/cart/reducer'

export interface ICoffee {
  id: string
  description: string
  name: string
  image: string
  price: number
  tags: string[]
}

export interface ICartItem {
  coffee: ICoffee
  quantity: number
}

export interface IPaymentInfo {
  street: string
  number: number
  city: string
  state: string
  zip: number
  complement?: string
  paymentType: 'credit-card' | 'debit-card' | 'money'
}

export interface IAppContextProps {
  coffees: ICoffee[]
  cart: ICartItem[]
  statesNames: string[]
  paymentInfo?: IPaymentInfo
  addItemToCart: (coffee: ICoffee, quantity: number) => void
  removeItemFromCart: (coffeeId: string) => void
  updateCartItemQuantity: (coffeeId: string, quantity: number) => void
  updatePaymentInfo: (address: IPaymentInfo) => void
}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
)

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer<typeof cartReducer, ICartState>(
    cartReducer,
    {
      cart: [],
    },
    (initialState: ICartState) => {
      return initialState
    }
  )

  const [paymentInfo, setPaymentInfo] = useState<IPaymentInfo | undefined>(
    undefined
  )

  const { coffees, statesNames } = db

  const { cart } = state

  function addItemToCart(coffee: ICoffee, quantity: number) {
    dispatch(addItemToCartAction(coffee, quantity))
  }

  function removeItemFromCart(coffeeId: string) {
    dispatch(removeItemFromCartAction(coffeeId))
  }

  function updateCartItemQuantity(coffeeId: string, quantity: number) {
    dispatch(updateCartItemQuantityAction(coffeeId, quantity))
  }

  function updatePaymentInfo(address: IPaymentInfo) {
    setPaymentInfo(address)
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        coffees,
        addItemToCart,
        statesNames,
        paymentInfo,
        updatePaymentInfo,
        removeItemFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
