import React from 'react';
import { Link } from 'react-router-dom';

import { getMovieInfos, getMovieCast } from '../services/fetchMoviesData';

export class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieInfos: {},
      movieCast: [],
    };
  }

  componentDidMount() {
    this.getMovieInfosAndCast();
  }

  getMovieInfosAndCast = async () => {
    const {
      match: {
        params: { movieID },
      },
    } = this.props;
    const { data: movieInfos } = await getMovieInfos(movieID);
    const {
      data: { cast: movieCast },
    } = await getMovieCast(movieID);
    console.log(movieInfos, movieCast);
    this.setState({ movieInfos, movieCast });
  };

  render() {
    const { id, title, overview, poster_path } = this.state.movieInfos;
    const { movieCast } = this.state;
    return (
      <div>
        <div key={id}>
          <div>
            <img
              alt="movie pic"
              src={
                poster_path === null
                  ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  : `https://image.tmdb.org/t/p/w500${poster_path}`
              }
            />
          </div>
          <div>
            <div>{title}</div>
            <div>{overview}</div>
          </div>
        </div>
        <div>
          {movieCast.map(({ character, id: actorID, name, profile_path }) => (
            <div key={actorID}>
              <Link to={`/actor/${actorID}`}>
                <div>
                  <div>
                    <img
                      alt="actor pic"
                      src={
                        profile_path === null
                          ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                          : `https://image.tmdb.org/t/p/w185${profile_path}`
                      }
                    />
                    <div>{name}</div>
                    <div>{character}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
