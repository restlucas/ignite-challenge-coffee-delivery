import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  width: 1160px;
  margin: 0 auto;
  padding: 5rem 1.25rem;

  > h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-dark']}
  }

  > p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6.375rem;
    align-self: start;
  }
`

export const Order = styled.div`
  height: 16.875rem;
  padding: 2.5rem;

  background:
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`
