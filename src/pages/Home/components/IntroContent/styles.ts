import styled from 'styled-components'

export const IntroContentContainer = styled.section`
  display: flex;
  padding: 5.75rem 0;
  gap: 3.5rem;

  @media (max-width: 1080px) {
    flex-wrap: wrap;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 52%;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;

    color: ${({ theme }) => theme['gray-900']};
  }

  p {
    size: 1.25rem;
    margin-top: 1rem;
    font-stretch: 100;

    line-height: 1.625rem;

    color: ${({ theme }) => theme['gray-800']};
  }

  @media (max-width: 1280px) {
    width: 46%;

    h1 {
      font-size: 2.6rem;
    }
  }

  @media (max-width: 1200px) {
    width: 42%;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1080px) {
    img {
      max-width: 70%;
    }
  }

  @media (max-width: 960px) {
    img {
      max-width: 80%;
    }
  }

  @media (max-width: 780px) {
    img {
      max-width: 90%;
    }
  }

  @media (max-width: 640px) {
    img {
      max-width: 100%;
    }
  }
`

export const IconsListContainer = styled.ul`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: flex-start;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  align-items: center;
  margin-top: 4.125rem;

  li {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 130%;

    color: ${({ theme }) => theme['gray-700']};

    svg {
      padding: 0.5rem;
      box-sizing: content-box;
      border-radius: 999px;
    }
  }

  li:nth-of-type(1) svg {
    background: ${({ theme }) => theme['yellow-700']};
  }
  li:nth-of-type(2) svg {
    background: ${({ theme }) => theme['gray-700']};
  }
  li:nth-of-type(3) svg {
    background: ${({ theme }) => theme['yellow-500']};
  }
  li:nth-of-type(4) svg {
    background: ${({ theme }) => theme['purple-500']};
  }
`
