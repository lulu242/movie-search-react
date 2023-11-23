import React from 'react';
import { myData } from '../types';
import styled from 'styled-components';

export const About: React.FC = () => {
  const { photo, name, email, github, blog } = myData;
  return (
    <AboutContainer photo={photo}>
      <div className="photo"></div>
      <p className="name">{name}</p>
      <p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noreferrer"
        >
          {email}
        </a>
      </p>
      <p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <p>
        <a href={blog} target="_blank" rel="noreferrer">
          Blog
        </a>
      </p>
    </AboutContainer>
  );
};

const AboutContainer = styled.section<{ photo: string }>`
  .photo {
    background-image: ${(props) => `url(${props.photo})`};
    width: 230px;
    height: 230px;
    margin: 0 auto 20px;
    border-radius: 10px;
    background-size: cover;
  }
  .name {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    line-height: 1.5;
    text-align: center;
    margin-bottom: 4px;
  }
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
