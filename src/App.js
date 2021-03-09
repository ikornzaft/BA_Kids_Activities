import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styled';

import { HomePage, Kids, Museums, Parks, Places } from './pages'


const App = () => (
  <React.Fragment>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;700&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />    
      <GlobalStyle />
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/kids/' component={Kids} />
          <Route exact path='/museums/' component={Museums} />
          <Route exact path='/parks/' component={Parks} />
          <Route path='/places/:id' component={Places} />  
      </Switch>
  </React.Fragment>
)

export default App;