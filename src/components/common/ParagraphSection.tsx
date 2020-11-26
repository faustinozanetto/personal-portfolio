import React from 'react';
import styled from 'styled-components';
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
  padding: 1rem 1.5rem 1rem 1.5rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

type TextProps = {
  readonly darkMode: boolean;
};

const Text = styled.p<TextProps>`
  font-size: 1.5rem;
  text-align: justify;
  text-justify: justify;
  color: ${(props) =>
    props.darkMode ? `${colors.textDark}` : `${colors.textLight}`} !important;
  transition: font-size 0.2s ease-in-out;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

type ParagraphSectionProps = {
  title: string;
  text: string;
  darkMode: boolean;
};

const ParagraphSection = ({ title, text, darkMode }: ParagraphSectionProps) => {
  return (
    <AnimatedContainer>
      <Container>
        <Title>{title}</Title>
        <Text darkMode={darkMode}>{text}</Text>
      </Container>
    </AnimatedContainer>
  );
};

export default ParagraphSection;
