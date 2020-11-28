import React, { lazy } from 'react';
import styled from 'styled-components';

const ProgressBar = lazy(() => import('../common/ProgressBar'));

type WrapperProps = {
  readonly dark: boolean;
};
const Wrapper = styled.section<WrapperProps>`
  padding-bottom: 130px;
  padding-top: 125px;
  display: block;
  background-color: ${(props) => (props.dark ? '#fbfbfb' : ' #f8f9fa')};
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

const HeaderWrapper = styled.div`
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`;

const HeaderContent = styled.div`
  text-align: center !important;
`;

const HeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 45px;
  color: #000;
  padding-bottom: 20px;
  margin: 0;
  line-height: 1.2;
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
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const LeftContent = styled.div`
  margin-top: 50px;

  & > h5 {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 15px;
    color: #32333c;
    margin: 0;
    line-height: 1.2;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: #8a8fa3;
    margin: 0;
  }
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

  @media (min-width: 1200px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;

const RightContent = styled.div`
  padding-top: 25px;
`;

type AboutSectionProps = {
  dark: boolean;
};
const AboutSection = ({ dark }: AboutSectionProps) => {
  return (
    <Wrapper dark={dark}>
      <Container>
        <HeaderWrapper>
          <HeaderContainer>
            <HeaderContent>
              <HeaderTitle>About Me</HeaderTitle>
            </HeaderContent>
          </HeaderContainer>
        </HeaderWrapper>
        <Content>
          <LeftContainer>
            <LeftContent>
              <h5>Hi There! I´m Faustino Zanetto</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <RightContent>
              <ProgressBar title={'HTML'} />
              <ProgressBar title={'HTML'} />
              <ProgressBar title={'HTML'} />
              <ProgressBar title={'HTML'} />
            </RightContent>
          </RightContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AboutSection;
