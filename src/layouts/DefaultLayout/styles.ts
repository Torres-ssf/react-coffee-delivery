import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  @media (max-width: 1660px) {
    padding: 0 2rem;
  }

  @media (max-width: 1560px) {
    padding: 0 4rem;
  }

  @media (max-width: 960px) {
    padding: 0 2rem;
  }

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`
