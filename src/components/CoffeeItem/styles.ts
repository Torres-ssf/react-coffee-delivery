import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: ${({ theme }) => theme['gray-100']};

  flex: 1 1 0;

  max-width: 17rem;
  min-width: 14rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  padding: 0 1.25rem;

  p {
    color: ${({ theme }) => theme['gray-600']};
    font-size: 0.875rem;
    line-height: 130%;

    margin-top: 0.5rem;
  }
`

export const CoffeeTagsList = styled.ul`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  margin-top: 0.75rem;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    line-height: 130%;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    background: ${({ theme }) => theme['yellow-300']};
    color: ${({ theme }) => theme['yellow-700']};
  }
`

export const CoffeeImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;

  margin-top: -1.25rem;
`

export const CoffeeName = styled.h3`
  margin-top: 1rem;

  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
  text-align: center;

  text-transform: capitalize;
`

export const BuyCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin: auto 0.25rem 1.25rem;
  width: 100%;
`

export const CoffeeQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-400']};

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: transparent;

    width: 0.875rem;
    height: 0.875rem;

    color: ${({ theme }) => theme['purple-500']};

    cursor: pointer;
  }
`

export const PriceContainer = styled.span`
  margin-right: auto;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`
export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;
  box-sizing: content-box;

  border: none;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['purple-700']};
`
