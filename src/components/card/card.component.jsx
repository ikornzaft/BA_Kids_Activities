import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className={props.class}>
    <h2> {props.place.nombre} </h2>
    <div className='card__content'>
      <h3> {props.class.toUpperCase()} </h3>
      <div className='card__image'></div>
      <button onClick={() => {props.toggleVisibility()}}>Visible</button>
    </div>
  </div>
)