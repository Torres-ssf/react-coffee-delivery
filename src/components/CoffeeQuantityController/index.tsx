import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeQuantityContainer } from './styles'

export function CoffeeQuantityController() {
  const [quantity, setQuantity] = useState(0)

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity(quantity - 1)
  }

  return (
    <CoffeeQuantityContainer>
      <button type="button" onClick={handleDecreaseQuantity}>
        <Minus size={14} />
      </button>
      {quantity}
      <button type="button" onClick={handleIncreaseQuantity}>
        <Plus size={14} />
      </button>
    </CoffeeQuantityContainer>
  )
}
