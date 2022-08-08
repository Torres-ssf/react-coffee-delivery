import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartItemDetails = styled.div`
  display: flex;
  gap: 20px;

  width: 23rem;
  height: 5rem;
  padding: 0.5rem 0.25rem;

  color: ${({ theme }) => theme['gray-800']};
  font-size: 1rem;
  line-height: 130%;

  img {
    height: 4rem;
    width: 4rem;
  }
`

export const CoffeeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    text-transform: capitalize;
  }
`

export const CoffeeDetailsController = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveCoffeeItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  color: ${({ theme }) => theme['gray-700']};
  font-size: 0.75rem;
  text-transform: uppercase;

  border: none;
  border-radius: 6px;
  padding: 0.40625rem 0.5rem;

  background: ${({ theme }) => theme['gray-400']};
  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['gray-500']};
  }
`
export const Price = styled.strong`
  flex: 1;
  justify-content: flex-end;

  display: flex;

  color: ${({ theme }) => theme['gray-700']};
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
`

export const Divisor = styled.span`
  display: block;
  margin: 1.5rem 0;

  border-top: 1px solid ${({ theme }) => theme['gray-400']};

  width: 100%;
`
