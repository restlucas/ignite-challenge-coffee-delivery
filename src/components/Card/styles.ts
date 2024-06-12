import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImage = styled.img`
  margin-top: -1.25rem;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 0.875rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;

    ${mixins.fonts.tag}
  }
`

export const Title = styled.h3`
  margin-top: 1rem;

  color: ${(props) => props.theme['base-subtitle']};
  ${mixins.fonts.titleS};
`

export const Description = styled.span`
  width: 100%;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-label']};
  ${mixins.fonts.textS};
`

export const Control = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 3px;

  span:fist-child {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-text']}
  }

  span:last-child {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme['base-text']}
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonCart = styled.button`
  border: none;
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => props.theme['purple-dark']};
  transition: 0.35s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  &.added {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
