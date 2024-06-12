import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const CartContainer = styled.section`
  width: 1160px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h1 {
    margin-bottom: 0.9375rem;
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmYourOrder = styled.div`
  width: 640px;

  > form {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      width: 100%;
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px;
      padding: 2.5rem;
    }

    > div:first-child {
      height: 23.25rem;
    }

    > div:last-child {
      height: 12.9375rem;
    }
  }
`

export const Header = styled.div`
  height: auto;
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const Title = styled.div`
  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1;
  }

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-text']};
    line-height: 1;
  }
`

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  div {
    height: 2.625rem;
  }

  div:nth-child(1) {
    grid-column: 1 / 2;
  }
  div:nth-child(2) {
    grid-column: 1 / 4;
  }
  div:nth-child(3) {
    grid-column: 1 / 2;
  }
  div:nth-child(4) {
    grid-column: 2 / 4;
    position: relative;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      padding: 1rem;
      user-select: none;

      font-size: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme['base-label']};
    }
  }
  div:nth-child(5) {
    grid-column: 1 / 2;
  }
  div:nth-child(6) {
    grid-column: 2 / span 1;
    width: 100%;
  }
  div:nth-child(7) {
    grid-column: 3 / span 1;
    width: 100%;
  }
`

export const Radios = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
`

export const SelectedCoffees = styled.div`
  width: 448px;

  > div {
    width: 100%;
    height: auto;
    padding: 2.5rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
  }
`

export const Coffee = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  img {
    max-width: 64px;
  }

  > div {
    height: 64px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const CoffeeInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span:first-child {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-subtitle']}
  }

  > span:last-child {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`

export const Handle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`

export const Remove = styled.button`
  border: none;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.purple};
  }

  > span {
    line-height: 1 !important;
    ${mixins.fonts.buttonM}
    color: ${(props) => props.theme['base-text']}
  }
`

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  border: 0px;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  background-color: #dddddd;
  margin: 1.5rem 0;
`

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['base-text']};
    ${mixins.fonts.textS}
  }

  div:nth-child(1),
  div:nth-child(2) {
    span:last-child {
      ${mixins.fonts.textM}
    }
  }

  div:nth-child(3) {
    color: ${(props) => props.theme['base-subtitle']};
    ${mixins.fonts.textL}
    font-weight: bold;
  }
`

export const EmptyCart = styled.div`
  width: 100%;

  > div {
    align-items: center;
    justify-content: center;
    text-align: center;

    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-label']};
  }

  > hr {
    margin-bottom: 0px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  transition: 0.35s;
  cursor: pointer;
  ${mixins.fonts.buttonG}

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
