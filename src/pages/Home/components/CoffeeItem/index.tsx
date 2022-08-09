import {
  AddToCartButton,
  BuyCoffeeContainer,
  CoffeeImage,
  CoffeeItemContainer,
  CoffeeName,
  CoffeeTagsList,
  PriceContainer,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { CoffeeQuantityController } from '../../../../components/CoffeeQuantityController'
import { CoffeeContext, ICoffee } from '../../../../context/CoffeeContext'
import { useContext, useState } from 'react'

export interface ICoffeeItemProps extends ICoffee {}

export function CoffeeItem(props: ICoffeeItemProps) {
  const { cart, addItemToCart, updateCartItemQuantity, removeItemFromCart } =
    useContext(CoffeeContext)

  const { image, name, tags, description, price } = props

  const isCoffeeOnCart = cart.find(({ coffee }) => coffee.id === props.id)

  const [quantity, setQuantity] = useState(isCoffeeOnCart?.quantity || 0)

  function handleAddToCart() {
    if (quantity > 0) {
      addItemToCart(props, quantity)
    }
  }

  function onIncreaseQuantity() {
    if (isCoffeeOnCart) {
      updateCartItemQuantity(props.id, quantity + 1)
    }
    setQuantity(prevState => prevState + 1)
  }

  function onDecreaseQuantity() {
    if (quantity === 0) {
      return
    }

    setQuantity(prevState => {
      const newState = prevState - 1

      if (isCoffeeOnCart) {
        if (newState === 0) {
          removeItemFromCart(props.id)
        } else {
          updateCartItemQuantity(props.id, newState)
        }
      }

      return newState
    })
  }

  return (
    <CoffeeItemContainer>
      <CoffeeImage src={image} alt={`${name} image`} />

      <CoffeeTagsList>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </CoffeeTagsList>

      <CoffeeName>{name}</CoffeeName>

      <p>{description}</p>

      <BuyCoffeeContainer>
        <PriceContainer>
          $ <strong>{price}</strong>
        </PriceContainer>
        <CoffeeQuantityController
          quantity={quantity}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />

        <AddToCartButton
          isAddedToCart={!!isCoffeeOnCart}
          type="button"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} color={defaultTheme.white} weight="fill" />
        </AddToCartButton>
      </BuyCoffeeContainer>
    </CoffeeItemContainer>
  )
}
