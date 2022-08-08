import { CoffeeItem } from '../../components/CoffeeItem'
import { IntroContent } from '../../components/IntroContent'
import { CoffeeList, HomeContainer } from './styles'

import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Home() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <IntroContent />

      <h2>Our coffees</h2>

      <CoffeeList>
        {coffees.map(coffee => (
          <CoffeeItem key={coffee.id} {...coffee} />
        ))}
      </CoffeeList>
    </HomeContainer>
  )
}
