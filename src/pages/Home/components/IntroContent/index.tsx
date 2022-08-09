import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HeaderContainer,
  IconsListContainer,
  ImageContainer,
  IntroContentContainer,
} from './styles'

import imageCoffee from '../../../../assets/coffee-main-image.svg'
import { defaultTheme } from '../../../../styles/themes/default'

export function IntroContent() {
  return (
    <IntroContentContainer>
      <HeaderContainer>
        <h1>Find the perfect coffee for any time of the day</h1>
        <p>
          With Coffee Delivery you receive your coffee wherever you are, anytime
          of the day
        </p>
        <IconsListContainer>
          <li>
            <span>
              <ShoppingCart
                weight="fill"
                size={16}
                color={defaultTheme.white}
              />
            </span>
            Simple and secure purchase
          </li>
          <li>
            <span>
              <Timer weight="fill" size={16} color={defaultTheme.white} />
            </span>
            Tracked and fast delivery
          </li>
          <li>
            <span>
              <Package weight="fill" size={16} color={defaultTheme.white} />
            </span>
            high quality coffee cups
          </li>
          <li>
            <span>
              <Coffee weight="fill" size={16} color={defaultTheme.white} />
            </span>
            Coffee arrives with the temperature of your choice
          </li>
        </IconsListContainer>
      </HeaderContainer>
      <ImageContainer>
        <img src={imageCoffee} alt="Coffee image" />
      </ImageContainer>
    </IntroContentContainer>
  )
}
