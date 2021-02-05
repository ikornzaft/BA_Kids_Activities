import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

function selectKindOfPlace (name) {
  let placeType = "generic";
  if (name.toLowerCase().includes('museo')) placeType = "museum";
  if (name.toLowerCase().includes('teatro')) placeType = "theatre";
  if (name.toLowerCase().includes('plaza') || name.toLowerCase().includes('parque') || name.toLowerCase().includes('jardín')) placeType="park";
  return `card-container ${placeType}`;
};


export const CardList = props => (
  <div className='card-list'>
    {props.places.map(place => (
      <Card key={place.id} place={place} class={selectKindOfPlace(place.nombre)} />
    ))}
  </div>
);
