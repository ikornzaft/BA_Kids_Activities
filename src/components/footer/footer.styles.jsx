import styled from 'styled-components';
import { colors } from '../../styled'

const PageFooter = styled.footer`
    width: 100vw;
    height: 1.6rem;
    background-color: ${colors.blue_light};
    display: flex;
    justify-content: center;    
    align-items: center;
    text-align: center;
    z-index: 30;
    .madeBy {
        font-size: 0.7rem;
    }
`;

export { PageFooter };