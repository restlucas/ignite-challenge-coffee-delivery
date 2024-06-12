import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.section`
  position: relative;

  img#home-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`

export const HomePresentation = styled.div`
  max-width: 1160px;
  height: auto;
  margin: 0 auto;

  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 3.5rem;

  padding: 5.875rem 0 6.75rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    h1 {
      ${mixins.fonts.titleXL}
    }

    h3 {
      ${mixins.fonts.textL}
      margin-bottom: 4.125rem;
    }

    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.875rem;
    }
  }
`

export const CoffeeList = styled.section`
  width: 1160px;
  margin: 0 auto;
  padding: 32px 20px 150px;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`
