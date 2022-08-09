import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import {
  DeliveryIlustration,
  IconConatiner,
  InnerContainer,
  OrderConfirmedContainer,
  UserDetailsInfoContainer,
  UserInfo,
} from './styles'

import deliveryImage from '../../assets/delivery-Illustration.png'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export const OrderConfirmed = () => {
  const { paymentInfo } = useContext(CoffeeContext)

  return (
    <OrderConfirmedContainer>
      <h1>Woo! Order Confirmed</h1>
      <p>Now all you have to do is wait for the coffee to come to you soon</p>

      <InnerContainer>
        <UserInfo>
          <UserDetailsInfoContainer>
            <IconConatiner iconColor={defaultTheme['purple-500']}>
              <MapPin size={16} color={defaultTheme.white} weight="fill" />
            </IconConatiner>

            <div>
              <span>
                Delivery at{' '}
                <strong>
                  {paymentInfo!.street}, {paymentInfo!.number}
                </strong>
              </span>
              <span>
                {paymentInfo!.city}, {paymentInfo!.state}
              </span>
            </div>
          </UserDetailsInfoContainer>

          <UserDetailsInfoContainer>
            <IconConatiner iconColor={defaultTheme['yellow-500']}>
              <Timer size={16} color={defaultTheme.white} weight="fill" />
            </IconConatiner>

            <div>
              <span>Estimated delivery</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </UserDetailsInfoContainer>

          <UserDetailsInfoContainer>
            <IconConatiner iconColor={defaultTheme['yellow-700']}>
              <CurrencyDollar
                size={16}
                color={defaultTheme.white}
                weight="fill"
              />
            </IconConatiner>

            <div>
              <span>Payment on delivery</span>
              <span>
                <strong>{paymentInfo!.paymentType}</strong>
              </span>
            </div>
          </UserDetailsInfoContainer>
        </UserInfo>

        <DeliveryIlustration src={deliveryImage} />
      </InnerContainer>
    </OrderConfirmedContainer>
  )
}
