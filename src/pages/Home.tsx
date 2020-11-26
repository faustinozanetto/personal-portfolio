import React, { lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import aboutData from '../data/about.json';

// const LanguageCard = lazy(() => import('../components/card/LanguageCard'));
// const RecentWorkCard = lazy(() => import('../components/card/RecentWorkCard'));
const ParagraphSection = lazy(
  () => import('../components/common/ParagraphSection')
);
// const ContactForm = lazy(() => import('../components/contact/ContactForm'));

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 4rem 1rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem 1rem 2rem;
  }
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
        {aboutData.map((aboutInfo, index) => {
          return (
            <ParagraphSection
              key={index}
              darkMode={darkMode}
              title={''}
              // style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              text={aboutInfo.text}
            ></ParagraphSection>
          );
        })}
        {/* <ContactForm /> */}
      </HomeContainer>
    </React.Fragment>
  );
};

export default Home;
