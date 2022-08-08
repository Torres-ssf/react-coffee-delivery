import { createContext, ReactNode, useState } from 'react'

import db from '../../db.json'

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

export interface ICoffeeContextProps {
  coffees: ICoffee[]
  cart: ICartItem[]
  addItemToCart: (coffee: ICoffee, quantity: number) => void
  removeItemFromCart: (coffeeId: string) => void
  updateCartItemQuantity: (coffeeId: string, quantity: number) => void
}

export const CoffeeContext = createContext<ICoffeeContextProps>(
  {} as ICoffeeContextProps
)

export function CoffeeContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ICartItem[]>([])

  const { coffees } = db

  function addItemToCart(coffee: ICoffee, quantity: number) {
    const coffeeIndex = cart.findIndex(cartItem => {
      return cartItem.coffee.id === coffee.id
    })

    if (coffeeIndex < 0) {
      setCart(prevState => [...prevState, { coffee, quantity }])
    } else {
      setCart(prevState => {
        const newCart = [...prevState]
        const cartItemIndex = newCart.findIndex(
          cartItem => cartItem.coffee.id === coffee.id
        )

        newCart[cartItemIndex].quantity = quantity

        return newCart
      })
    }
  }

  function removeItemFromCart(coffeeId: string) {
    setCart(prevState =>
      prevState.filter(cartItem => {
        return cartItem.coffee.id !== coffeeId
      })
    )
  }

  function updateCartItemQuantity(coffeeId: string, quantity: number) {
    if (quantity === 0) {
      removeItemFromCart(coffeeId)

      return
    }

    setCart(prevState => {
      const coffeeInCart = prevState.find(({ coffee }) => {
        return coffee.id === coffeeId
      })

      if (coffeeInCart) {
        coffeeInCart.quantity = quantity
      }

      return [...prevState]
    })
  }

  return (
    <CoffeeContext.Provider
      value={{
        cart,
        coffees,
        addItemToCart,
        removeItemFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
