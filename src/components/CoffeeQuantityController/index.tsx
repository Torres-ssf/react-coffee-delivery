import { Minus, Plus } from 'phosphor-react'
import { CoffeeQuantityContainer } from './styles'

interface ICartItemProps {
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
}

export function CoffeeQuantityController(props: ICartItemProps) {
  const { quantity, onIncreaseQuantity, onDecreaseQuantity } = props

  function handleIncreaseQuantity() {
    onIncreaseQuantity()
  }

  function handleDecreaseQuantity() {
    onDecreaseQuantity()
  }

  return (
    <CoffeeQuantityContainer>
      <button type="button" onClick={handleDecreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      {quantity}
      <button type="button" onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeQuantityContainer>
  )
}
