import {
  CartItemContainer,
  CartItemDetails,
  CoffeeDetailsContainer,
  CoffeeDetailsController,
  Divisor,
  Price,
  RemoveCoffeeItemButton,
} from './styles'

import { CoffeeQuantityController } from '../../../../components/CoffeeQuantityController'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { CoffeeContext, ICartItem } from '../../../../context/CoffeeContext'
import { useContext } from 'react'

interface ICartItemProps extends ICartItem {}

export function CartItem(props: ICartItemProps) {
  const { updateCartItemQuantity, removeItemFromCart } =
    useContext(CoffeeContext)

  const { coffee, quantity } = props

  const { image, price, name } = coffee

  const valueFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function handleRemoveItemFromCart() {
    removeItemFromCart(coffee.id)
  }

  function onIncreaseQuantity() {
    updateCartItemQuantity(props.coffee.id, quantity + 1)
  }

  function onDecreaseQuantity() {
    updateCartItemQuantity(props.coffee.id, quantity - 1)
  }

  return (
    <CartItemContainer>
      <CartItemDetails>
        <img src={image} alt="" />

        <CoffeeDetailsContainer>
          <span>{name}</span>

          <CoffeeDetailsController>
            <CoffeeQuantityController
              quantity={quantity}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />

            <RemoveCoffeeItemButton
              type="button"
              onClick={handleRemoveItemFromCart}
            >
              <Trash size={16} color={defaultTheme['purple-500']} />
              Remove
            </RemoveCoffeeItemButton>
          </CoffeeDetailsController>
        </CoffeeDetailsContainer>

        <Price>{valueFormatter.format(price)}</Price>
      </CartItemDetails>

      <Divisor />
    </CartItemContainer>
  )
}
