import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import useSticky from './hooks/StickyNavbar';
import styled from 'styled-components';

const GlobalStyle = lazy(() => import('./styles/GlobalStyle'));
const Navbar = lazy(() => import('./components/navbar/Navbar.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const Footer = lazy(() => import('./components/footer/Footer.tsx'));

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  /* padding: 0rem 5% 0rem 5%;

  @media only screen and (max-width: 768px) {
    padding: 0rem 2% 0rem 2%;
  } */
  padding-top: 120px;
`;

const App = () => {
  const darkMode = useDarkMode(false);
  const location = useLocation();
  const { isSticky, element } = useSticky();

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/blog',
      view: Blog,
      displayName: 'Blog',
      showInNavbar: true,
    },
    {
      pageLink: '/contact',
      view: Contact,
      displayName: 'Contact',
      showInNavbar: true,
    },
  ];
  return (
    <React.Fragment>
      <AppContainer>
        <GlobalStyle />
        <Navbar
          darkMode={darkMode.value}
          darkModeFunc={darkMode}
          sticky={isSticky}
        />
        <MainContainer>
          <Suspense fallback={<div />}>
            <Switch location={location}>
              {pages.map((Page, index) => {
                return (
                  <Route
                    exact
                    path={Page.pageLink}
                    render={(props) => (
                      <Page.view
                        {...props}
                        darkMode={darkMode.value}
                        element={element}
                      />
                    )}
                    key={index}
                  />
                );
              })}
              <Redirect to='/' />
            </Switch>
          </Suspense>
        </MainContainer>
        <Suspense fallback={<div />}>
          <Footer darkMode={darkMode.value} />
        </Suspense>
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
