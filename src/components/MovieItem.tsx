import React from 'react'
import styled from 'styled-components';
import { SimpleMovie } from '../types';

interface MovieProps {
  movie: SimpleMovie;
}

export const MovieItem: React.FC<MovieProps> = ({movie}) => {
  return (
    <MovieWarpper poster={movie.Poster}>
      <div className="info">
        <div className="year">{movie.Year}</div>
        <div className="title">{movie.Title}</div>
      </div>
    </MovieWarpper>
    )
}

const MovieWarpper = styled.div<{poster: string}>`
  --width: 200px;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  border-radius: 4px;
  background-image: ${props => `url(${props.poster})`};
  background-color: var(--color-black);
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid var(--color-primary);
  }
  .info {
    background-color: rgba(14, 17, 27, 0.3);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .info .year {
    color: var(--color-primary);
  }
  .info .title {
    color: var(--color-white);
  }
`;
