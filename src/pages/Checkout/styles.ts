import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  h2 {
    margin-bottom: 1rem;

    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }
`

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 57%;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 43%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  background: ${({ theme }) => theme['gray-100']};
`

export const FormHeader = styled.header`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      font-size: 1rem;
      color: ${({ theme }) => theme['gray-800']};
    }

    span + span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['gray-700']};
    }
  }
`

export const AddressForm = styled.div`
  display: grid;
  gap: 1rem;
  grid-template:
    'zip . .'
    'street street street'
    'number complement complement'
    'count city state' auto / 12.5rem auto 4rem;

  width: 100%;
`
export const AddressInput = styled.input`
  border: none;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-400']};

  padding: 0.75rem;

  color: ${({ theme }) => theme['gray-700']};
  font-size: 0.875rem;
  line-height: 1.1375rem;

  background: ${({ theme }) => theme['gray-300']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const AddressInputZipCode = styled(AddressInput)`
  grid-area: zip;
`

export const AddressInputStreet = styled(AddressInput)`
  grid-area: street;
`

export const AddressInputNumber = styled(AddressInput)`
  grid-area: number;
`

export const AddressInputComplement = styled(AddressInput)`
  grid-area: complement;
`

export const AddressInputCount = styled(AddressInput)`
  grid-area: count;
`

export const AddressInputCity = styled(AddressInput)`
  grid-area: city;
`

export const AddressInputState = styled(AddressInput)`
  grid-area: state;
`

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaymentInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

interface IRadioInputLabelProps {
  isChecked?: boolean
}

export const RadioInputLabel = styled.label<IRadioInputLabelProps>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  border-radius: 6px;
  padding: 1rem;

  background: ${({ theme }) => theme['gray-400']};
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme['gray-700']};

  text-transform: uppercase;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  ${({ isChecked, theme }) =>
    isChecked
      ? css`
          background: ${theme['purple-300']};
          box-shadow: 0 0 0 2px ${theme['purple-500']};
        `
      : ''};

  &:hover {
    background: ${({ theme }) => theme['gray-500']};
  }

  input[type='radio'] {
    appearance: none;
  }

  input[type='radio']:focus {
    box-shadow: none;
  }
`

export const CartForm = styled.form`
  width: 100%;

  padding: 2.5rem;

  border-radius: 6px 44px;
  background: ${({ theme }) => theme['gray-100']};
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  font-size: 0.875rem;
  line-height: 130%;

  width: 100%;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
`

export const CartIsEmptyContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  line-height: 1.625rem;
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;

  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1.4rem;

  background: ${({ theme }) => theme['yellow-500']};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:enabled:hover {
    background: ${({ theme }) => theme['yellow-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
