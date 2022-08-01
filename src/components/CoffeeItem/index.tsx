import {
  AddToCartButton,
  BuyCoffeeContainer,
  CoffeeImage,
  CoffeeItemContainer,
  CoffeeName,
  CoffeeQuantityContainer,
  CoffeeTagsList,
  PriceContainer,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'

export interface ICoffeeItemProps {
  name: string
  image: string
  price: string
  description: string
  tags: string[]
}

export function CoffeeItem(props: ICoffeeItemProps) {
  const [quantity, setQuantity] = useState(1)

  const { image, name, tags, description, price } = props

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity(quantity - 1)
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
        <CoffeeQuantityContainer>
          <button type="button" onClick={handleDecreaseQuantity}>
            <Minus size={14} />
          </button>
          {quantity}
          <button type="button" onClick={handleIncreaseQuantity}>
            <Plus size={14} />
          </button>
        </CoffeeQuantityContainer>
        <AddToCartButton>
          <ShoppingCart size={22} color={defaultTheme.white} weight="fill" />
        </AddToCartButton>
      </BuyCoffeeContainer>
    </CoffeeItemContainer>
  )
}
