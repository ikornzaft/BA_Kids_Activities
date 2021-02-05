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
      searchField: '',
      cardListOn: true
    };
  }

  componentDidMount() {

    fetch(searchString)
      .then(response => response.json())
      .then(places => this.setState({ places: places.instancias }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value});
  
  cardVisibility = () => this.setState(prevState => ({cardListOn: !prevState.cardListOn}));

  render() {
    const { places, searchField } = this.state;
    const filteredPlaces = places.filter(place => place.nombre.toLowerCase().includes(searchField.toLowerCase()));

    console.log(places);

    return (
      <div className="App">
        <SearchBox placeholder='Search Places' handleChange={this.handleChange} />
        {this.state.cardListOn ? <CardList places={filteredPlaces} toggleVisibility={this.cardVisibility} /> : null}
        
      </div>
    );
  }
}

export default App;