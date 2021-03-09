import { createGlobalStyle } from 'styled-components';
import { colors, primaryFont } from '../';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        max-height: 100vh;
        box-sizing: border-box;
        font-size: 16px;
        font-family: ${primaryFont};
        font-weight: 300;
        color: #445167;
        background-color: ${colors.neutral_light};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
`;

export { GlobalStyle };