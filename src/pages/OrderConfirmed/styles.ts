import styled from 'styled-components'

export const OrderConfirmedContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme['yellow-500']};

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
  }

  p {
    color: ${({ theme }) => theme['gray-800']};
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  @media (max-width: 1020px) {
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1020px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  margin-top: 2.5rem;
  width: 32.875rem;

  @media (max-width: 660px) {
    width: 100%;
  }
`

export const UserDetailsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    font-size: 1rem;
    line-height: 1.3rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export interface IconContainerProps {
  iconColor: string
}

export const IconConatiner = styled.span<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 999px;

  background-color: ${({ iconColor }) => iconColor};
`

export const DeliveryIlustration = styled.img`
  @media (max-width: 660px) {
    width: 100%;
  }
`
