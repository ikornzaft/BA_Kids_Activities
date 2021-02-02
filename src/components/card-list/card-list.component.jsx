import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.places.map(place => (
      <Card key={place.id} place={place}/>
    ))}
  </div>
);
