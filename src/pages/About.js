import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import aboutData from '../data/about.json';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-left: 3rem;
`;

const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const AboutText = styled.div`
  animation-duration: 0.45s;
  animation-fill-mode: both;
  animation-name: fadeInUp;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About - Personal Portfolio</title>
      </Helmet>
      <AboutContainer>
        <AboutLeft>
          <h3>About Me</h3>
          {aboutData.map((aboutInfo, index) => {
            return (
              <AboutText
                key={index}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <p>{aboutInfo.text}</p>
              </AboutText>
            );
          })}
        </AboutLeft>
      </AboutContainer>
    </React.Fragment>
  );
};

export default About;
