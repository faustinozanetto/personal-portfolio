import React, { lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const AboutSection = lazy(() => import('../components/section/AboutSection'));
const PortfolioSection = lazy(
  () => import('../components/section/PortfolioSection')
);
const SkillsSection = lazy(() => import('../components/section/SkillsSection'));
const ContactSection = lazy(
  () => import('../components/section/ContactSection')
);

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface HomeProps {
  dark: Boolean;
}

const Home = ({ dark }: HomeProps) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Personal Portfolio</title>
      </Helmet>
      <HomeContainer>
        <AboutSection dark={dark} />
        <SkillsSection dark={dark} />
        <PortfolioSection dark={dark} />
        <ContactSection dark={dark} />
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
