import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container } from './pagemenuitem.style';

const PageMenuItem = ({ name, history, match }) => (
    <Container onClick={() => history.push(`${match.url}${name}`)}>
        <h1>{name}</h1>
    </Container>
);

const PageMenuItemWithRouter = withRouter(PageMenuItem);

export { PageMenuItemWithRouter };