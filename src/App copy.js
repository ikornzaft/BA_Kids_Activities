import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const searchString = "https://epok.buenosaires.gob.ar/buscar?texto=chicos&clase=actividades_para_chicos%7C1"

class App extends Component {
  constructor() {
    super();

    this.state = {
      places: [],
      searchField: ''
    };
  }

  componentDidMount() {

    fetch(searchString)
      .then(response => response.json())
      .then(places => this.setState({ places: places.instancias }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value});
  
  render() {
    const { places, searchField } = this.state;
    const filteredPlaces = places.filter(place => place.nombre.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder='Search Places' handleChange={this.handleChange} />
        <CardList places={filteredPlaces} />
      </div>
    );
  }
}

export default App;