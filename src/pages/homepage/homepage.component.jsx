import React from 'react';

import { Container } from './homepage.style';
import { PageMenuItemWithRouter } from '../../components';

const HomePage = () => (
    <Container>
        <h1>HomePage</h1>
        <PageMenuItemWithRouter name="Museums" />
        <PageMenuItemWithRouter name="Kids" />
    </Container>
);

export { HomePage };