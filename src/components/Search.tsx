import React from 'react';
import { moviesState } from '../types';
import styled from 'styled-components';

interface SearchProps {
  movies: moviesState;
  setMovies: React.Dispatch<React.SetStateAction<moviesState>>
  searchMovie: (page:number) => Promise<void>
}

export const Search: React.FC<SearchProps> = ({ movies, setMovies, searchMovie }) => {
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovies({ ...movies, searchText: e.target.value });
  };

  return (
    <SearchContainer>
      <input
        value={movies.searchText}
        placeholder="Enter the movie title to search!"
        onChange={onChangeSearch}
        onKeyDown={(e) => (e.key === 'Enter' && movies.searchText.trim()) ? searchMovie(1) : null}
      />
      <button className="btn btn-primary" onClick={() => movies.searchText.trim() ? searchMovie(1) : null}>Search!</button>
    </SearchContainer>
  );
};

const SearchContainer = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;

  input {
    flex-grow: 1;
    height: 50px;
    padding: 0 20px;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 14px;
    color: var(--color-white);
    background-color: var(--color-area);
  }
`;
