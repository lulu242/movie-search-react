import React from 'react';
import { myData } from '../types';
import styled from 'styled-components';

export const TheFooter: React.FC = () => {
  return (
    <Footer>
      <div>
        <a href={myData.repository}>GitHub Repository.</a>
      </div>
      <div>
        <a href={myData.github}>
          {new Date().getFullYear()} 
          YeongEun
        </a>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  padding: 40px 40px 60px;
  text-align: center;
  a {
    color: var(--color-white-20);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
