import React, { lazy, useState, Suspense } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import './App.scss';

const GlobalStyle = lazy(() => import('./styles/GlobalStyle'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const Footer = lazy(() => import('./components/footer/Footer'));

const MainContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const AppContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box; */
`;

const App = () => {
  const darkMode = useDarkMode(false);
  const location = useLocation();

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
        <Navbar pages={pages} {...{ darkMode }} />
        {/* <MainContainer>
          <Suspense fallback={<div />}>
            <Switch location={location}>
              {pages.map((page, index) => {
                return (
                  <Route
                    exact
                    path={page.pageLink}
                    render={({ match }) => <page.view />}
                    key={index}
                  />
                );
              })}
              <Redirect to='/' />
            </Switch>
          </Suspense>
        </MainContainer> */}
        {/* <Suspense fallback={<div />}>
          <Footer />
        </Suspense> */}
      </AppContainer>
    </React.Fragment>
  );
};

export default App;
