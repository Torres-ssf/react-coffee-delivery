import { HeaderContainer, LocationNavLink, ShoppingCartNavLink } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="App logo" />
      <nav>
        <LocationNavLink href="#">
          <MapPin size={22} color={defaultTheme['purple-500']} weight="fill" />
          Sacramento, CA
        </LocationNavLink>
        <ShoppingCartNavLink>
          <ShoppingCart
            size={22}
            color={defaultTheme['yellow-700']}
            weight="fill"
          />
          <span>3</span>
        </ShoppingCartNavLink>
      </nav>
    </HeaderContainer>
  )
}
