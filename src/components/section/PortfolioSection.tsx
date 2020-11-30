import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../common/ProjectCard';
import { Theme } from '../../styles';

const { colors } = Theme;

const Portfolio = styled.div`
  padding: 27px 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 40px;
  background: ${(props) =>
    props.dark
      ? `${colors.sectionBackgroundDark}`
      : `${colors.sectionBackgroundLight}`};
  border-radius: 10px;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
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

const InfoSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type PortfolioSectionProps = {
  dark: Boolean;
};

const PortfolioSection = ({ dark }: PortfolioSectionProps) => {
  return (
    <Portfolio>
      <Container>
        <BoxContent dark={dark}>
          <TitleSection>
            <Title dark={dark}>My Projects</Title>
          </TitleSection>
          <InfoSection>
            <InfoText dark={dark}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, architecto dignissimos? Eveniet magni harum
              blanditiis.
            </InfoText>
          </InfoSection>
          <ProjectsContainer>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

          </ProjectsContainer>
        </BoxContent>
      </Container>
    </Portfolio>
  );
};

export default PortfolioSection;
