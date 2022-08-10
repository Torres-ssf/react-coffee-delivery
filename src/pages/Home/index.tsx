import { CoffeeItem } from './components/CoffeeItem'
import { IntroContent } from './components/IntroContent'
import { CoffeeList, HomeContainer } from './styles'

import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function Home() {
  const { coffees } = useContext(AppContext)

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
