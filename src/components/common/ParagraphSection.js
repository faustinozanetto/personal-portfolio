import React from 'react';
import styled from 'styled-components';

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

const SectionContainer = styled.section``;

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

const TextContent = styled.div`
  color: #000;
`;

const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.75rem;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  transition: font-size 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ParagraphSection = () => {
  return (
    <AnimatedContainer>
      <SectionContainer>
        <Container>
          <Title>TITLE</Title>
          <TextContent>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              placeat voluptatibus eum dolor? Molestiae ipsam, debitis ex atque
              quis delectus dolorem possimus placeat velit, sit doloremque sunt
              nostrum nisi magnam saepe labore voluptas deleniti provident
              soluta. Itaque a asperiores repellat?
            </Text>
          </TextContent>
        </Container>
      </SectionContainer>
    </AnimatedContainer>
  );
};

export default ParagraphSection;
