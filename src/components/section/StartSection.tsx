import React, { lazy } from 'react';
import styled from 'styled-components';
import hero from '../../assets/images/hero.png';

type WrapperProps = {
  readonly dark: boolean;
};
const Wrapper = styled.section<WrapperProps>`
  padding-bottom: 130px;
  padding-top: 125px;
  display: block;
  background-color: ${(props) => (props.dark ? '#fbfbfb' : ' #f8f9fa')};

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  @media (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /* max-width: 1140px; */

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media only screen and(min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and(min-width: 576px) {
    max-width: 540px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const LeftContent = styled.div`
  position: relative;
`;

const SubTitle = styled.h4`
  font-size: 30px;
  color: #754ef9;
  text-transform: uppercase;
  padding-bottom: 15px;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  padding-bottom: 15px;
  font-weight: 600;
  color: #32333c;
  margin: 0;
  line-height: 1.2;
`;

const Text = styled.p`
  padding-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #8a8fa3;
  margin: 0;
`;

const RightContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 1200px) {
    margin-left: 8.333333%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;

const RightContent = styled.div`
  max-width: 430px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 992px) {
    display: block !important;
  }
`;

const Image = styled.img`
  max-width: 100%;
  position: relative;
  vertical-align: middle;
  border-style: none;
  z-index: 5;
`;

type StartSectionProps = {
  dark: boolean;
};
const StartSection = ({ dark }: StartSectionProps) => {
  return (
    <Wrapper dark={dark}>
      <Container>
        <Content>
          <LeftContainer>
            <LeftContent>
              <SubTitle>Hello, I´m</SubTitle>
              <Title>Faustino Zanetto</Title>
              <Text>Freelance UI Designer & Full Stack Developer</Text>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <RightContent>
              <Image src={hero} />
            </RightContent>
          </RightContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default StartSection;
