import React, { lazy, Suspense, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import useDarkMode from 'use-dark-mode';
import useWindowSize from './hooks/useWindowSize';
import styled from 'styled-components';

const GlobalStyle = lazy(() => import('./styles/GlobalStyle'));
const Navbar = lazy(() => import('./components/navbar/Navbar.tsx'));
const Footer = lazy(() => import('./components/footer/Footer.tsx'));

const Home = lazy(() => import('./pages/Home'));

const AppWrapper = styled.div`
  /* min-height: 100vh; */
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div``;

const HeadWrapper = styled.header`
  display: block;
`;

const App = () => {
  //Dark mode state
  const darkMode = useDarkMode(false);
  const location = useLocation();
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Pages
  const portfolioPages = [
    {
      link: '/',
      view: Home,
      displayName: 'Home',
    },
  ];

  // Run scroll render once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    console.log(size.height);
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <Router>
      <React.Fragment>
        <HttpsRedirect>
          <AppWrapper ref={app}>
            <Container ref={scrollContainer}>
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
                <Footer darkMode={darkMode.value} />
              </Suspense>
            </Container>
          </AppWrapper>
        </HttpsRedirect>
      </React.Fragment>
    </Router>
  );
};

export default App;
