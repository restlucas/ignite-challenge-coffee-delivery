import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.1875rem;

  ${mixins.fonts.buttonM}
  color: ${(props) => props.theme['base-text']};

  svg {
    min-height: 16px;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 100%;
    width: 100%;
    padding: 1rem;

    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
  }

  input[type='radio']:checked + label {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    border-radius: 6px;
  }
`
