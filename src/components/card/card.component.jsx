import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className={props.class}>
    <h2> {props.place.nombre} </h2>
    <div className='card__content'>
      <div className='card__image'></div>
    </div>
  </div>
)