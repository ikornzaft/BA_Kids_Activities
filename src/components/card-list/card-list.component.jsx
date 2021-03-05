import React from 'react';
import { CardWithRouter } from '../card/card.component';

import './card-list.styles.css';

const CardList = props => (
  <div className='card-list'>
    {props.places.map(place => (
      <CardWithRouter key={place.id} place={place}/>
    ))}
  </div>
);

export { CardList };