import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import db from '../database/coffee-db.json'
import {
  addItemToCartAction,
  emptyCartAction,
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
  emptyCart: () => void
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
      const stateJson = localStorage.getItem(
        import.meta.env.VITE_CART_STORAGE_KEY
      )

      if (stateJson) {
        return JSON.parse(stateJson)
      }

      return initialState
    }
  )

  const [paymentInfo, setPaymentInfo] = useState<IPaymentInfo | undefined>(
    undefined
  )

  useEffect(() => {
    const stateJson = JSON.stringify(state)

    localStorage.setItem(import.meta.env.VITE_CART_STORAGE_KEY, stateJson)
  }, [state])

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

  function emptyCart() {
    dispatch(emptyCartAction())
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
        emptyCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
