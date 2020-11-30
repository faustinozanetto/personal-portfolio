import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/images/about.jpg';
import { Theme } from '../../styles';

const { colors } = Theme;

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

interface BoxContentProps {
  readonly dark: Boolean;
}

const BoxContent = styled.div<BoxContentProps>`
  padding: 0;
  background: ${(props) =>
    props.dark
      ? `${colors.sectionBackgroundDark}`
      : `${colors.sectionBackgroundLight}`};
  border-radius: 10px;
`;

interface RowContainerProps {
  readonly dark: Boolean;
}

const RowContainer = styled.div<RowContainerProps>`
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

interface TitleProps {
  readonly dark: Boolean;
}

const Title = styled.h3<TitleProps>`
  font-weight: 700;
  color: ${(props) =>
    props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  font-size: 28px;
  line-height: 110%;
  margin: 0;
`;

const LeftInfo = styled.div``;

interface InfoTitleProps {
  readonly dark: Boolean;
}

const InfoTitle = styled.h2<InfoTitleProps>`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 15px;
  line-height: 110%;
  margin: 0;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

  & > span {
    color: ${(props) =>
      props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  }
`;

interface InfoTextProps {
  readonly dark: Boolean;
}

const InfoText = styled.p<InfoTextProps>`
  margin: 0;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};
  font-size: 14px;
  line-height: 22px;
  font-weight: ${(props) => (props.dark ? 400 : 600)};
`;

type AboutSectionProps = {
  dark: Boolean;
};

const AboutSection = ({ dark }: AboutSectionProps) => {
  return (
    <About>
      <Container>
        <BoxContent dark={dark}>
          <RowContainer dark={dark}>
            <LeftContainer>
              <LeftContent>
                <TitleContainer>
                  <Title dark={dark}>About Me</Title>
                </TitleContainer>
                <LeftInfo>
                  <InfoTitle dark={dark}>
                    I am a <span>Web Developer</span>
                  </InfoTitle>
                  <InfoText dark={dark}>
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
