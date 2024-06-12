import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25;

    ${mixins.fonts.textS};

    padding: 10px 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-light']};
    transition: 0.35s;

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    position: relative;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
      transition: 0.35s;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      transition: 0.35s;

      height: 1.25rem;
      width: 1.25rem;
      ${mixins.fonts.textS}
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
      border-radius: 100%;
    }

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};

      svg {
        color: ${(props) => props.theme['yellow-light']};
      }

      span {
        background-color: ${(props) => props.theme.yellow};
      }
    }
  }
`
