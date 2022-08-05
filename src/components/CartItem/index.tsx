import {
  CartItemContainer,
  CartItemDetails,
  CoffeeDetailsContainer,
  CoffeeDetailsController,
  Divisor,
  Price,
  RemoveCoffeeItemButton,
} from './styles'

import coffeeImage from '../../assets/coffee-images/american.png'
import { CoffeeQuantityController } from '../CoffeeQuantityController'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function CartItem() {
  return (
    <CartItemContainer>
      <CartItemDetails>
        <img src={coffeeImage} alt="" />

        <CoffeeDetailsContainer>
          <span>Traditional Express</span>

          <CoffeeDetailsController>
            <CoffeeQuantityController />

            <RemoveCoffeeItemButton type="button">
              <Trash size={16} color={defaultTheme['purple-500']} />
              Remove
            </RemoveCoffeeItemButton>
          </CoffeeDetailsController>
        </CoffeeDetailsContainer>

        <Price>$9,90</Price>
      </CartItemDetails>

      <Divisor />
    </CartItemContainer>
  )
}
