import React from 'react';
import { moviesState } from '../types';
import styled from 'styled-components';
import { MovieItem } from './MovieItem';

interface MovieListProps {
  movies: moviesState;
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies.message ? (
        <div className="message">{movies.message}</div>
      ) : (
        <div className="movies">
          {movies.movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
      {movies.loading && <div className="the-loader"></div>}
    </MovieListContainer>
  );
};

const MovieListContainer = styled.section`
  padding: 20px;
  border-radius: 4px;
  background-color: var(--color-area);
  .message {
    color: var(--color-primary);
    font-size: 20px;
    text-align: center;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;
