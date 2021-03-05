import React, { useState, useEffect } from 'react';

import { CardList, SearchBox } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=Museo"

const Museums = () => {
    const [places, fetchedPlaces] = useState([]);
    
    useEffect(() => {
        fetch(searchString)
          .then(response => response.json())
          .then(places => fetchedPlaces( places.instancias ));
    });
    
    return (
        <div>
            <h1>Museums</h1>
            <CardList places={places} />
        </div>
    );
} 
  
export { Museums };