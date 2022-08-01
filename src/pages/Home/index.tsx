import { CoffeeItem, ICoffeeItemProps } from '../../components/CoffeeItem'
import { IntroContent } from '../../components/IntroContent'
import { CoffeeList, HomeContainer } from './styles'

import db from '../../../db.json'

export function Home() {
  const { coffees } = db

  return (
    <HomeContainer>
      <IntroContent />

      <h2>Our coffees</h2>

      <CoffeeList>
        {coffees.map((coffee: ICoffeeItemProps) => (
          <CoffeeItem key={coffee.name} {...coffee} />
        ))}
      </CoffeeList>
    </HomeContainer>
  )
}
