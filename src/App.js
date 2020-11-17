import React, { lazy, useState, Suspense } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import './App.scss';

const GlobalStyle = lazy(() => import('./style/GlobalStyle'));

const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

const Footer = lazy(() => import('./components/footer/Footer'));

const Portfolio = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MainContainer = styled.div`
  /* align-self: center; */
  /* display: flex; */
  /* flex-direction: column; */
  /* padding-left: 20%;
  padding-right: 20%;
  padding-top: 30px; */
  min-height: 100vh;
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
      pageLink: '/about',
      view: About,
      displayName: 'About',
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
    <Portfolio>
      <GlobalStyle />
      <MainContainer>
        <Navbar pages={pages} {...{ darkMode }} />
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
      </MainContainer>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </Portfolio>
  );
};

export default App;
