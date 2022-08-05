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
import { defaultTheme } from '../../styles/themes/default'
import { CoffeeQuantityController } from '../CoffeeQuantityController'

export interface ICoffeeItemProps {
  name: string
  image: string
  price: string
  description: string
  tags: string[]
}

export function CoffeeItem(props: ICoffeeItemProps) {
  const { image, name, tags, description, price } = props

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
        <CoffeeQuantityController />

        <AddToCartButton>
          <ShoppingCart size={22} color={defaultTheme.white} weight="fill" />
        </AddToCartButton>
      </BuyCoffeeContainer>
    </CoffeeItemContainer>
  )
}
