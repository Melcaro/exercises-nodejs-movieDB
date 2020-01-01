import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { Movies } from './Movies';
import { MoviePage } from './MoviePage';
import { ActorPage } from './ActorPage';

import { getLatestsMovies } from './../services/fetchMoviesData';

import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
    };
  }

  componentDidMount() {
    this.fetchLatestMovies();
  }
  fetchLatestMovies = async () => {
    const {
      data: { results: moviesList },
    } = await getLatestsMovies();
    this.setState({ moviesList });
  };

  render() {
    const { moviesList } = this.state;
    return (
      <div className="App">
        <h1>Movie DB with NodeJS</h1>
        <BrowserRouter>
          <div>
            <Route path="/" component={SearchBar} />
            <Route
              exact
              path="/"
              render={props => <Movies {...props} moviesList={moviesList} />}
            />
            <Route
              exact
              path="/movie/:movieID"
              render={props => <MoviePage {...props} />}
            />
            <Route
              exact
              path="/actor/:actorID"
              render={props => <ActorPage {...props} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
