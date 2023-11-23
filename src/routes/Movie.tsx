import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailedMovie } from '../types';
import styled from 'styled-components';

export const Movie: React.FC = () => {
  const location = useLocation();
  const id: string = location.search.slice(4);
  const [movie, setMovie] = React.useState<DetailedMovie>({} as DetailedMovie);
  const [loading, setLoading] = React.useState(true);
  const bigPoster = movie.Poster?.replace('SX300', 'SX700');

  const getMovieDetails = async (id: string) => {
    try {
      const res = await fetch(
        `https://omdbapi.com?apikey=78177d20&i=${id}&plot=full`
      );
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.log('getMovieDetails error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);
  
  return loading ? (
    <MovieContainer bigPoster={bigPoster}>
      <div className="poster skeleton"></div>
      <div className="specs">
        <div className="title skeleton"></div>
        <div className="labels skeleton"></div>
        <div className="plot skeleton"></div>
      </div>
    </MovieContainer>
  ) : (
    <MovieContainer bigPoster={bigPoster}>
      <div className="poster"></div>
      <div className="specs">
        <div className="title">{movie.Title}</div>
        <div className="labels">
          <span>{movie.Released}</span>
          &nbsp;/&nbsp;
          <span>{movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>{movie.Country}</span>
          &nbsp;/&nbsp;
        </div>
        <div className="plot">{movie.Plot}</div>
        <div>
          <h3>Ratings</h3>
          {movie.Ratings?.map((rating) => (
            <p key={rating.Source}>
              {rating.Source} - {rating.Value}
            </p>
          ))}
        </div>
        <div>
          <h3>Actors</h3>
          <p>{movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>{movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>{movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>{movie.Genre}</p>
        </div>
      </div>
    </MovieContainer>
  );
};

const MovieContainer = styled.section<{ bigPoster: string }>`
  color: var(--color-white-50);
  display: flex;
  gap: 70px;
  .poster {
    background-image: ${(props) => `url(${props.bigPoster})`};
    flex-shrink: 0;
    --width: 500px;
    width: var(--width);
    height: calc(var(--width) * 3 / 2);
    border-radius: 10px;
    background-size: cover;
    background-color: var(--color-area);
  }
  .specs {
    flex-grow: 1;
  }
  .title {
    font-family: 'Oswald', sans-serif;
    font-size: 70px;
    line-height: 1;
    color: var(--color-white);
    margin-bottom: 30px;
  }
  .title.skeleton {
    height: 70px;
  }
  .labels {
    color: var(--color-primary);
    margin-bottom: 20px;
  }
  .labels.skeleton {
    height: 30px;
  }
  .plot.skeleton {
    width: 80%;
    height: 400px;
  }
  h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: var(--color-white);
    margin: 24px 0 6px;
  }
`;
