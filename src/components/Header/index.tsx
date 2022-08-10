import {
  HeaderContainer,
  LocationNavLink,
  LogoLink,
  ShoppingCartNavLink,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export function Header() {
  const { cart } = useContext(AppContext)

  const itemsCount = cart.reduce((acc, { quantity }) => acc + quantity, 0)

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <img src={logo} alt="App logo" />
      </LogoLink>

      <nav>
        <LocationNavLink to="#">
          <MapPin size={22} color={defaultTheme['purple-500']} weight="fill" />
          Sacramento, CA
        </LocationNavLink>
        <ShoppingCartNavLink to="/checkout">
          <ShoppingCart
            size={22}
            color={defaultTheme['yellow-700']}
            weight="fill"
          />
          {itemsCount > 0 && <span>{itemsCount}</span>}
        </ShoppingCartNavLink>
      </nav>
    </HeaderContainer>
  )
}
