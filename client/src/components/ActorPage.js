import React from 'react';
import { Link } from 'react-router-dom';

import {
  getActorInfosByID,
  getActorFilmography,
} from '../services/fetchMoviesData';
export class ActorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorInfos: {},
      actorFilmography: [],
    };
  }
  componentDidMount() {
    this.getActorInfos();
  }

  getActorInfos = async () => {
    const {
      match: {
        params: { actorID },
      },
    } = this.props;

    const { data: actorInfos } = await getActorInfosByID(actorID);
    const { data: actorFilmography } = await getActorFilmography(actorID);
    this.setState({ actorInfos, actorFilmography });
  };

  render() {
    const {
      id: actorID,
      name,
      biography,
      profile_path,
    } = this.state.actorInfos;
    const { actorFilmography } = this.state;
    return (
      <div>
        <div key={actorID}>
          <div>
            <img
              alt="actor pic"
              src={
                !profile_path
                  ? 'https://images.unsplash.com/photo-1559059699-085698eba48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  : `https://image.tmdb.org/t/p/w185${profile_path}`
              }
            />
          </div>
          <div>
            <div>{name}</div>
            <div>{biography}</div>
          </div>
        </div>
        <div>
          <div>Appears in:</div>
          <div>
            {actorFilmography.map(
              ({ character, title, id: movieID, backdrop_path }) => (
                <div key={movieID}>
                  <Link to={`/movie/${movieID}`}>
                    <div>
                      <img
                        alt="movie pic"
                        src={
                          backdrop_path === null
                            ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                            : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                        }
                      />
                    </div>
                    <div>{title}</div>
                    <div>{character}</div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
