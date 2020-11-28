import React, { lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import aboutData from '../data/about.json';

// const LanguageCard = lazy(() => import('../components/card/LanguageCard'));
// const RecentWorkCard = lazy(() => import('../components/card/RecentWorkCard'));
const ParagraphSection = lazy(
  () => import('../components/common/ParagraphSection')
);

const IntroductionSection = lazy(
  () => import('../components/section/IntroductionSection')
);

const StartSection = lazy(() => import('../components/section/StartSection'));

const AboutSection = lazy(() => import('../components/section/AboutSection'));

const ServicesSection = lazy(
  () => import('../components/section/ServicesSection')
);
// const ContactForm = lazy(() => import('../components/contact/ContactForm'));

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const HomeLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 90%;
// `;

// const CardsContainer = styled.div`
//   align-self: center;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   flex-basis: auto;
//   justify-content: space-between;
// `;

// const RecentWorkContainer = styled.div`
//   align-self: center;
//   display: flex;
//   flex-direction: column;
// `;

// const RecentWorkCardsContainer = styled.div`
//   align-self: center;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   flex-basis: auto;
//   justify-content: space-between;
// `;

// const RecentWorkTitle = styled.h2`
//   align-self: center;
// `;

// const RecentWorkSubtitle = styled.h3`
//   align-self: center;
// `;

type HomeProps = {
  darkMode: boolean;
};

const Home = ({ darkMode }: HomeProps) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - Personal Portfolio</title>
      </Helmet>
      <HomeContainer>
        {/* {aboutData.map((aboutInfo, index) => {
          return (
            <ParagraphSection
              key={index}
              darkMode={darkMode}
              title={''}
              // style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              text={aboutInfo.text}
            ></ParagraphSection>
          );
        })} */}
        {/* <IntroductionSection dark={false}></IntroductionSection>
        <AboutSection dark={true}></AboutSection> */}
        <StartSection dark={false}></StartSection>
        <AboutSection dark={true}></AboutSection>
        <ServicesSection dark={false}></ServicesSection>
        {/* <ContactForm /> */}
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
