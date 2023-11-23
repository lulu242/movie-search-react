import React, { useState } from 'react';
import { Headline } from '../components/Headline';
import { Search } from '../components/Search';
import { SimpleMovie, DetailedMovie, moviesState } from '../types';
import { MovieList } from '../components/MovieList';
import { MovieListMore } from '../components/MovieListMore';

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<moviesState>({
    searchText: '',
    page: 1,
    pageMax: 1,
    movies: [] as SimpleMovie[],
    movie: {} as DetailedMovie,
    loading: false,
    message: 'Search for the movie title!',
  });

  const searchMovie = async (page: number) => {
    setMovies((prevMovies) => ({
      ...prevMovies,
      loading: true,
      message: '',
      page,
    }));
    if (page === 1) {
      setMovies((prevMovies) => ({ ...prevMovies, message: '', movies: [] }));
    }
    try {
      const res = await fetch(
        `https://omdbapi.com?apikey=78177d20&s=${movies.searchText}&page=${movies.page}`
      );
      const { Response, Search, totalResults, Error } = await res.json();
      if (Response === 'True') {
        const newPageMax = Math.ceil(Number(totalResults / 10));
        setMovies((prevMovies) => ({
          ...prevMovies,
          movies: [...prevMovies.movies, ...Search],
          pageMax: newPageMax,
          page: movies.page + 1,
        }));
        console.log(movies);
      } else {
        setMovies((prevMovies) => ({
          ...prevMovies,
          message: Error,
          pageMax: 1,
        }));
      }
    } catch (error) {
      console.log('searchMovies error:', error);
    } finally {
      setMovies((prevMovies) => ({ ...prevMovies, loading: false }));
    }
  };

  return (
    <div className="container">
      <Headline />
      <Search movies={movies} setMovies={setMovies} searchMovie={searchMovie} />
      <MovieList movies={movies} />
      <MovieListMore movies={movies} searchMovie={searchMovie} />
    </div>
  );
};
