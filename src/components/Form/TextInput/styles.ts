import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Input = styled.input`
  height: 2.625rem;
  padding: 1rem;
  border: none;
  width: 100%;

  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  ${mixins.fonts.textS};
  color: ${(props) => props.theme['base-label']};
`
