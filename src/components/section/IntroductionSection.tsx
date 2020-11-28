import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/about_hero.png';

type ContentContainerProps = {
  readonly dark: boolean;
};

const Wrapper = styled.section`
  padding-bottom: 120px;
  padding-top: 70px;
  display: block;
  box-sizing: border-box;
`;

const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${(props) => (props.dark ? '#1c1c1c' : ' #262626')};

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const ItemsContainer = styled.div`
  align-items: center !important;
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const LeftContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const RightContainer = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const IntroductionMiniTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 2rem;
`;

const IntroductionTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`;

const AvatarImage = styled.img``;

const IntroductionText = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

type ContentSectionProps = {
  dark: boolean;
};

const ContentSection = ({ dark }: ContentSectionProps) => {
  return (
    <Wrapper>
      <ContentContainer dark={dark}>
        <ItemsContainer></ItemsContainer>
        <LeftContainer>
          <IntroductionMiniTitle>Hi, I am</IntroductionMiniTitle>
          <IntroductionTitle>Faustino Zanetto</IntroductionTitle>
          <IntroductionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum
            fugit voluptatem ut eius vitae.
          </IntroductionText>
        </LeftContainer>
        <RightContainer>
          <AvatarImage src={avatar}></AvatarImage>
        </RightContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default ContentSection;
