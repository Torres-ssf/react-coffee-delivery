import styled from 'styled-components'

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
