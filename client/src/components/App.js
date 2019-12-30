import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { Movies } from './Movies';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';

import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Movie DB with NodeJS</h1>
        <BrowserRouter>
          <div>
            <Route path="/" component={SearchBar} />
            <Route exact path="/" component={Movies} />
            <Route exact path="/movie" component={MoviePage} />
            <Route exact path="/actor" component={ActorPage} />
          </div>
        </BrowserRouter>
        <SearchBar />
        <MoviesComponent />
      </div>
    );
  }
}
