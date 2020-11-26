import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles';
const { colors } = Theme;

const AnimatedContainer = styled.div`
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-iteration-count: 1;
  opacity: 0;
  /* display: flex; */
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Container = styled.div`
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.5rem;
  line-height: 1.3em;

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.75rem;
  text-align: justify;
  text-justify: inter-word;
  color: ${(props) =>
    props.darkmode ? `${colors.textDark}` : `${colors.textLight}`};
  transition: font-size 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ParagraphSection = ({ title, text, darkMode }) => {
  return (
    <AnimatedContainer>
      <Container>
        <Title>{title}</Title>
        <Text darkmode={darkMode}>{text}</Text>
      </Container>
    </AnimatedContainer>
  );
};

export default ParagraphSection;
