import React from 'react';
import { Link } from 'react-router-dom';

export const Movies = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <div>
      {moviesList}
      {/* {moviesList.map(({ id, backdrop_path, title }) => (
        <div key={id}>
          <Link to={`/movie/${id}`}>
            <div>
              <img
                alt="movie poster"
                src={
                  backdrop_path === null
                    ? 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                    : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                }
              />
            </div>
            <div>{title}</div>
          </Link>
        </div>
      ))} */}
    </div>
  );
};
