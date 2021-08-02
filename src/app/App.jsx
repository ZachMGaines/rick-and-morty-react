import React, { Component } from 'react';
import RickandMortyCharacters from '../container/RickandMortyCharacters';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CharacterDetail from '../container/CharacterDetail';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact={true}
              render={routerProps => (
                <RickandMortyCharacters {...routerProps} />
              )}
            />
            <Route path="/character/:id" exact={true}
              render={routerProps => (
                <CharacterDetail {...routerProps} />
              )}
            />
            <Redirect to="/" />

          </Switch>
        </Router >
      </div>
    );
  }
}


