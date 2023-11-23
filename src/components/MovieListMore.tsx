import React from 'react';
import { moviesState } from '../types';
import styled from 'styled-components';

interface MovieMorePros {
  movies: moviesState;
  searchMovie: (page:number) => Promise<void>;
}

export const MovieListMore: React.FC<MovieMorePros> = ({movies, searchMovie,}) => {
  return (
    <>
      {movies.pageMax >= movies.page && (
        <ViewMore className="btn" onClick={() => searchMovie(movies.page)}>View more..</ViewMore>
      )}
    </>
  );
};

const ViewMore = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  display: block;
`;
