import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, Kids, Museums, Places } from './pages'


const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/kids/' component={Kids} />
      <Route exact path='/museums/' component={Museums} />
      <Route path='/places/:id' component={Places} />
    </Switch>
  </React.Fragment>
)

export default App;