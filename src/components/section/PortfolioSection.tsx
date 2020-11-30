import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../common/ProjectCard';

const Portfolio = styled.div`
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
  background: #262626;
  padding: 40px;
  border-radius: 3px;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 110%;
  margin: 0;
  color: #8ff7f3;
`;

const InfoSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const Info = styled.h4`
  padding: 0;
  margin: 0;
  color: #fff;
  font-weight: 600;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PortfolioSection = () => {
  return (
    <Portfolio>
      <Container>
        <BoxContent>
          <TitleSection>
            <Title>My Projects</Title>
          </TitleSection>
          <InfoSection>
            <Info>These are some of the projects I´ve worked on!</Info>
          </InfoSection>
          <ProjectsContainer>
            <ProjectCard />
            <ProjectCard />
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
