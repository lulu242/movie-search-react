import React from 'react';
import styled from 'styled-components';

export const NotFound: React.FC = () => {
  return (
    <NotFoundContent className='container'>
      Sorry, page not found..<span>🥲</span>
    </NotFoundContent>
  );
};

const NotFoundContent = styled.h1`
  font-size: 70px;
  font-weight: 700;
  color: var(--color-white-10);
  text-align: center;
  span {
    color: var(--color-white-50);
  }
`;
