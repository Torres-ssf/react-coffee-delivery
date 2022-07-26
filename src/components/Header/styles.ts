import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;

  margin: 0 auto;
  padding: 2rem 0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  line-height: 130%;

  border-radius: 6px;
  padding: 0.5rem;
`

export const LocationNavLink = styled(NavLink)`
  gap: 0.25rem;

  font-size: 0.875rem;

  background: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-700']};
`

export const ShoppingCartNavLink = styled(NavLink)`
  position: relative;

  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 0.75rem;

  background: ${({ theme }) => theme['yellow-300']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    top: -0.5rem;
    right: -0.5rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;

    background: ${({ theme }) => theme['yellow-700']};
  }
`
