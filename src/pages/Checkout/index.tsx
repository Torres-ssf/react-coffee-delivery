import {
  AddressForm,
  FormContainer,
  FormHeader,
  AddressInputCity,
  AddressInputComplement,
  AddressInputCount,
  AddressInputNumber,
  AddressInputState,
  AddressInputStreet,
  AddressInputZipCode,
  CartContainer,
  CheckoutContainer,
  OrderFormContainer,
  PaymentInputsContainer,
  PaymentFormContainer,
  RadioInputLabel,
  CartForm,
  TotalPriceContainer,
  ConfirmOrderButton,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'
import { CartItem } from '../../components/CartItem'

export function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState('')

  function handleChange(e: any) {
    setSelectedPayment(e.target.value)
  }

  return (
    <CheckoutContainer>
      <OrderFormContainer>
        <h2>Complete your order</h2>

        <FormContainer>
          <FormHeader>
            <MapPinLine size={22} color={defaultTheme['yellow-700']} />
            <div>
              <span>Delivery address</span>
              <span>
                Enter the address where you want to receive your order
              </span>
            </div>
          </FormHeader>

          <AddressForm>
            <AddressInputZipCode type="number" placeholder="Zip Code" />
            <AddressInputStreet type="text" placeholder="Street" />
            <AddressInputNumber type="number" placeholder="Number" min={1} />
            <AddressInputComplement type="text" placeholder="Complement" />
            <AddressInputCount type="text" placeholder="Count" />
            <AddressInputCity type="text" placeholder="City" />
            <AddressInputState type="text" placeholder="State" />
          </AddressForm>
        </FormContainer>

        <FormContainer>
          <PaymentFormContainer>
            <FormHeader>
              <CurrencyDollar size={22} color={defaultTheme['purple-500']} />
              <div>
                <span>Payment</span>
                <span>
                  Select the payment method you want to use to pay for your
                  order
                </span>
              </div>
            </FormHeader>

            <PaymentInputsContainer>
              <RadioInputLabel isChecked={/credit-card/.test(selectedPayment)}>
                <input
                  type="radio"
                  name="payment-type"
                  onChange={handleChange}
                  value="credit-card"
                />
                <CreditCard size={16} color={defaultTheme['purple-500']} />
                credit card
              </RadioInputLabel>

              <RadioInputLabel isChecked={/debit-card/.test(selectedPayment)}>
                <input
                  type="radio"
                  name="payment-type"
                  onChange={handleChange}
                  value="debit-card"
                />
                <Bank size={16} color={defaultTheme['purple-500']} />
                debit card
              </RadioInputLabel>

              <RadioInputLabel isChecked={/money/.test(selectedPayment)}>
                <input
                  type="radio"
                  name="payment-type"
                  onChange={handleChange}
                  value="money"
                />
                <Money size={16} color={defaultTheme['purple-500']} />
                money
              </RadioInputLabel>
            </PaymentInputsContainer>
          </PaymentFormContainer>
        </FormContainer>
      </OrderFormContainer>

      <CartContainer>
        <h2>Selected Coffees</h2>
        <CartForm>
          <CartItem />
          <CartItem />
          <TotalPriceContainer>
            <div>
              <span>Total in items</span>
              <span>$ 29,20</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>$ 33,00</strong>
            </div>
          </TotalPriceContainer>

          <ConfirmOrderButton>Confirm Order</ConfirmOrderButton>
        </CartForm>
      </CartContainer>
    </CheckoutContainer>
  )
}
