import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/images/about.jpg';

const About = styled.div`
  padding: 27px 0;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  transition: max-width 200ms ease-in-out;

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

const BoxContent = styled.div`
  padding: 0;
  background: #262626;
  border-radius: 3px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  color: #fafafa;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const RightContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 576px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const LeftContent = styled.div`
  padding: 40px;
`;

const RightContent = styled.div`
  background-size: cover;
  background-position: 100% 100%;
  height: 100%;
  border-radius: 0 3px 3px 0;
`;

const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-weight: 700;
  color: #8ff7f3;
  font-size: 28px;
  line-height: 110%;
  margin: 0;
`;

const LeftInfo = styled.div``;

const InfoTitle = styled.h2`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 15px;
  line-height: 110%;
  margin: 0;
  color: #fff;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const InfoText = styled.p`
  margin: 0;
`;

const AboutSection = () => {
  return (
    <About>
      <Container>
        <BoxContent>
          <RowContainer>
            <LeftContainer>
              <LeftContent>
                <TitleContainer>
                  <Title>About Me</Title>
                </TitleContainer>
                <LeftInfo>
                  <InfoTitle>I am a Web Developer</InfoTitle>
                  <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    doloremque ratione perferendis possimus voluptatibus
                    distinctio autem expedita qui unde modi impedit officia
                    illum praesentium amet, vero quos natus veritatis totam!
                  </InfoText>
                </LeftInfo>
              </LeftContent>
            </LeftContainer>
            <RightContainer>
              <RightContent
                style={{ backgroundImage: `url(${aboutImage})` }}
              ></RightContent>
            </RightContainer>
          </RowContainer>
        </BoxContent>
      </Container>
    </About>
  );
};

export default AboutSection;
