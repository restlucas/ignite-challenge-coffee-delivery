import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  max-width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    border: none;
    background-color: transparent;

    svg {
      fill: ${(props) => props.theme.purple};
    }
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: center;
    cursor: pointer;
    line-height: 1;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    user-select: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
