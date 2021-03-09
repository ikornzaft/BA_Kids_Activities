import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Image, NameTag, NameText } from './pagemenuitem.style';

const PageMenuItem = ({ name, image, positionx, positiony, history, match }) => (
    <Container positionx={positionx} positiony={positiony} onClick={() => history.push(`${match.url}${name}`)}>
        <Image image={image} />
        <NameTag>
            <NameText>{name}</NameText>
        </NameTag>
    </Container>
);

const PageMenuItemWithRouter = withRouter(PageMenuItem);

export { PageMenuItemWithRouter };