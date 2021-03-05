import React, { useState, useEffect } from 'react';

import { CardList, SearchBox } from '../../components'

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"

const Kids = () => {
    const [places, fetchedPlaces] = useState([]);
    const [placesList, filteredPlaces] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        const fetchFunc = async() => {
            const response = await fetch(searchString);
            const resJson = await response.json();
            fetchedPlaces(resJson.instancias);
            filteredPlaces(resJson.instancias);
        };
        fetchFunc();
    }, []);

    useEffect(() => {
        searchQuery ? filteredPlaces(places.filter(place => place.nombre.toLowerCase().includes(searchQuery.toLowerCase()))) : filteredPlaces(places)
    }, [searchQuery]);

    return (
        <div>
            <h1>Kids</h1>
            <SearchBox type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Insert location"/>
            <CardList places={placesList} />
        </div>
    );
}

export { Kids };