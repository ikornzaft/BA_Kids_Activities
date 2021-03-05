import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.styles.css';

const Card = ({ place, history }) => (
  <div className='card-container' onClick={() => history.push(`Places/${place.id}`)}>
    <h2> {place.nombre.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')} </h2>
  </div>
)

const CardWithRouter = withRouter(Card);

export { CardWithRouter };