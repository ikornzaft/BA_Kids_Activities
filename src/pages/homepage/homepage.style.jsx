import styled from 'styled-components';

import { colors, device, primaryFont, secondaryFont } from '../../styled' 
import map from '../../assets/img/Map.svg';


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${colors.neutral_medium};
    @media ${device.laptop_small} {
        height: 95vw;
        width: 95vw;
    }
`;



const Header = styled.header`
    height: 18vh;
    width: 100vw;
    background-color: ${colors.neutral_light};
    font-family: ${secondaryFont};
    .header-kicker, .header-title {
        color: ${colors.blue};
    }
    .header-kicker {
        margin: 1.2rem 0.9rem 0.3rem 0.9rem;
        font-weight: 100;
        font-size: 1.25rem;
    }
    .header-title {
        margin: 0 0.9rem 0.2rem 0.9rem;
        font-size: 2.1rem;
    }
    .header-subtitle {
        font-size: 1.5rem;
        margin: 0 0.9rem 0.8rem 0.9rem;
        color: ${colors.blue_medium};
        font-weight: 100;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.blue_dark};
    font-weight: 100;
    font-size: 1.2rem;
    .main-article {
        margin: 2rem 0.8rem 0 0.8rem;
    }
`;
    
const IconsContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align:center;
    margin-top: 2.5rem;
    gap: 0.2rem;
    @media ${device.laptop_small} {
        flex-direction: column;
        display: relative;
        height: 90vh;
        width: 50vw;
        background-image: url(${map});
        background-size: cover;
    }
`;



export { Container, Header, Main, IconsContainer };