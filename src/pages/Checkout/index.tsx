import {
  AddressContainer,
  GrayContainer,
  GrayContainerHeader,
  AddressInputCity,
  AddressInputComplement,
  AddressInputNumber,
  AddressInputStreet,
  AddressInputZipCode,
  CartContainer,
  CheckoutContainer,
  AddressAndPaymentContainer,
  PaymentContainer,
  RadioInputLabel,
  CartForm,
  TotalPriceContainer,
  ConfirmOrderButton,
  CartIsEmptyContainer,
  StateSelect,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CartItem } from './components/CartItem'
import { AppContext, IPaymentInfo } from '../../context/AppContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { paymentInfoSchema } from '../../utils/yup/schemas'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const {
    statesNames: states,
    cart,
    updatePaymentInfo,
  } = useContext(AppContext)
  const navigate = useNavigate()

  const { register, handleSubmit, watch } = useForm<IPaymentInfo>({
    resolver: yupResolver(paymentInfoSchema),
    shouldUseNativeValidation: true,
  })

  const paymentType = watch('paymentType')

  const isCartEmpty = cart.length === 0

  const totalInItems = cart.reduce((acc, item) => {
    return acc + item.quantity * item.coffee.price
  }, 0)

  const deliveryPrice = 3.5

  const totalPrice = totalInItems + deliveryPrice

  const valueFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  function processPayment(data: IPaymentInfo) {
    updatePaymentInfo(data)
    navigate('/order-confirmed')
  }

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(processPayment)}>
        <AddressAndPaymentContainer>
          <h2>Complete your order</h2>

          <GrayContainer>
            <GrayContainerHeader>
              <MapPinLine size={22} color={defaultTheme['yellow-700']} />
              <div>
                <span>Delivery address</span>
                <span>
                  Enter the address where you want to receive your order
                </span>
              </div>
            </GrayContainerHeader>

            <AddressContainer>
              <AddressInputZipCode
                type="number"
                placeholder="Zip Code"
                {...register('zip', { valueAsNumber: true })}
              />
              <AddressInputStreet
                type="text"
                placeholder="Street"
                {...register('street')}
              />
              <AddressInputNumber
                type="number"
                placeholder="Number"
                min={1}
                {...register('number')}
              />
              <AddressInputComplement
                type="text"
                placeholder="Complement (optional)"
                {...register('complement')}
              />
              <AddressInputCity
                type="text"
                placeholder="City"
                {...register('city')}
              />
              <StateSelect {...register('state')} defaultValue="">
                default
                <option value="" disabled hidden>
                  Select your State
                </option>
                {states.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </StateSelect>
            </AddressContainer>
          </GrayContainer>

          <GrayContainer>
            <GrayContainerHeader>
              <CurrencyDollar size={22} color={defaultTheme['purple-500']} />
              <div>
                <span>Payment</span>
                <span>
                  Select the payment method you want to use to pay for your
                  order
                </span>
              </div>
            </GrayContainerHeader>

            <PaymentContainer>
              <RadioInputLabel isChecked={/credit-card/.test(paymentType)}>
                <input
                  type="radio"
                  value="credit-card"
                  {...register('paymentType')}
                />
                <CreditCard size={16} color={defaultTheme['purple-500']} />
                credit card
              </RadioInputLabel>

              <RadioInputLabel isChecked={/debit-card/.test(paymentType)}>
                <input
                  type="radio"
                  value="debit-card"
                  {...register('paymentType')}
                />
                <Bank size={16} color={defaultTheme['purple-500']} />
                debit card
              </RadioInputLabel>

              <RadioInputLabel isChecked={/money/.test(paymentType)}>
                <input
                  type="radio"
                  value="money"
                  {...register('paymentType')}
                />
                <Money size={16} color={defaultTheme['purple-500']} />
                money
              </RadioInputLabel>
            </PaymentContainer>
          </GrayContainer>
        </AddressAndPaymentContainer>

        <CartContainer>
          <h2>Selected Coffees</h2>
          <CartForm>
            {cart.map(item => (
              <CartItem key={item.coffee.id} {...item} />
            ))}

            <TotalPriceContainer>
              {!isCartEmpty ? (
                <>
                  <div>
                    <span>Total in items</span>
                    <span>{valueFormatter.format(totalInItems)}</span>
                  </div>
                  <div>
                    <span>Delivery</span>
                    <span>{valueFormatter.format(deliveryPrice)}</span>
                  </div>
                  <div>
                    <strong>Total</strong>
                    <strong>{valueFormatter.format(totalPrice)}</strong>
                  </div>
                </>
              ) : (
                <CartIsEmptyContainer>Your cart is empty</CartIsEmptyContainer>
              )}
            </TotalPriceContainer>

            <ConfirmOrderButton disabled={isCartEmpty} type="submit">
              Confirm Order
            </ConfirmOrderButton>
          </CartForm>
        </CartContainer>
      </form>
    </CheckoutContainer>
  )
}
