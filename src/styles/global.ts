import { createGlobalStyle } from 'styled-components'

import { mixins } from './mixins'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0;

    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, textarea, button {
        ${mixins.fonts.textM};
    }
`
