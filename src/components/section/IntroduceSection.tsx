import React from 'react';
import styled from 'styled-components';

type ContentContainerProps = {
  readonly dark: boolean;
};

const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.dark ? '#1c1c1c' : ' #262626')};
`;

const CardsContainer = styled.div``;

const IntroductionContainer = styled.div``;

type ContentSectionProps = {
  dark: boolean;
};

const ContentSection = ({ dark }: ContentSectionProps) => {
  return (
    <ContentContainer dark={dark}>
      <CardsContainer></CardsContainer>
      <IntroductionContainer></IntroductionContainer>
    </ContentContainer>
  );
};

export default ContentSection;
