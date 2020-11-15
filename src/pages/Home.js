import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 3rem;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Personal Portfolio</title>
      </Helmet>
      <HomeContainer>
        <h3>Welcome to my portfolio</h3>
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
