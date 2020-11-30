import React, { lazy, Suspense } from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

const GlobalStyle = lazy(() => import('./styles/GlobalStyle'));
const Navbar = lazy(() => import('./components/navbar/Navbar.tsx'));

const AboutSection = lazy(() => import('./components/section/AboutSection'));
const PortfolioSection = lazy(() =>
  import('./components/section/PortfolioSection')
);
const SkillsSection = lazy(() => import('./components/section/SkillsSection'));
const ContactSection = lazy(() =>
  import('./components/section/ContactSection')
);

const Footer = lazy(() => import('./components/footer/Footer.tsx'));

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Head = styled.header`
  display: block;
`;

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      <AppContainer>
        <GlobalStyle />
        <Head>
          <Navbar darkMode={darkMode.value} darkModeFunc={darkMode} />
        </Head>
        <AboutSection dark={darkMode.value} />
        <PortfolioSection dark={darkMode.value} />
        <SkillsSection dark={darkMode.value} />
        <ContactSection dark={darkMode.value} />
        <Suspense fallback={<div />}>
          <Footer darkMode={darkMode.value} />
        </Suspense>
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
