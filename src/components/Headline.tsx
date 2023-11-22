import React from 'react';
import styled from 'styled-components';

export const Headline: React.FC = () => {
  return (
    <HeadlineContainer>
      <h1>
        <span>OMDb API</span>
        <br />
        THE OPEN
        <br />
        MOVIES DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, all
        content and images on the site are contributed and maintained by our
        users.
        <br />
        If you find this service useful, please consider making a one-time
        donation or become a patron.
      </p>
    </HeadlineContainer>
  );
};

const HeadlineContainer = styled.section`
  margin-bottom: 40px;
  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }
  h1 span {
    color: var(--color-primary);
  }
  p {
    color: var(--color-white-30);
  }
`;
