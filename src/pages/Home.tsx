import React, { lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type HomeProps = {
  darkMode: boolean;
};

const Home = ({ darkMode }: HomeProps) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Personal Portfolio</title>
      </Helmet>
      <HomeContainer>

      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
