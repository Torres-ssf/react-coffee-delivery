import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  line-height: 130%;

  border-radius: 6px;
  padding: 0.5rem;
`

export const LocationNavLink = styled(NavigationLink)`
  gap: 0.25rem;

  font-size: 0.875rem;

  background: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme['purple-700']};
`

export const ShoppingCartNavLink = styled(NavigationLink)`
  position: relative;

  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme['yellow-300']};

  span {
    position: absolute;

    top: -0.5rem;
    right: -0.5rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;

    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;

    background: ${({ theme }) => theme['yellow-700']};
  }
`
