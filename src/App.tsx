import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

const GlobalStyle = lazy(() => import('./styles/GlobalStyle'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const Footer = lazy(() => import('./components/footer/Footer'));

const Home = lazy(() => import('./pages/Home'));

const AppWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
`;

const Container = styled.div``;

const HeadWrapper = styled.header`
  display: block;
`;

const App = () => {
  //Dark mode state
  const darkMode: any = useDarkMode(false);
  const location = useLocation();

  // Pages
  const portfolioPages = [
    {
      link: '/',
      view: Home,
      displayName: 'Home',
    },
  ];

  return (
    <Router>
      <React.Fragment>
        <AppWrapper>
          <Container>
            <GlobalStyle />
            <HeadWrapper>
              <Navbar darkMode={darkMode.value} darkModeFunc={darkMode} />
            </HeadWrapper>
            <Suspense fallback={<div />}>
              <Switch location={location}>
                {portfolioPages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.link}
                      render={(props) => <page.view dark={darkMode.value} />}
                      key={index}
                    />
                  );
                })}
              </Switch>
            </Suspense>
            <Suspense fallback={<div />}>
              <Footer />
            </Suspense>
          </Container>
        </AppWrapper>
      </React.Fragment>
    </Router>
  );
};

export default App;
