import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.875rem;

  div {
    min-height: 2rem;
    min-width: 2rem;
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  span {
    ${mixins.fonts.textM}
  }
`
