import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Text } from './generic-button.style';

const GenericButton = ({ name, text, history, match }) => (
    <Container onClick={() => history.push(`${match.url}${name}`)}>
            <Text>{text}</Text>
    </Container>
);

const GenericButtonWithRouter = withRouter(GenericButton);

export { GenericButtonWithRouter };