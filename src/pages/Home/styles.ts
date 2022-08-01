import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 3.375rem;

    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme['gray-800']};
  }
`

export const CoffeeList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  list-style: none;
`
