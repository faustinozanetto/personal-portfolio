import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import styled from 'styled-components';
import './Navbar.scss';

const ThemeSwitcher = lazy(() => import('../theme/ThemeSwitcher'));

const NavbarHeader = styled.header`
  position: relative;
`;

const NavbarLogo = styled.h2`
  color: black;
  font-weight: 600;
  position: relative;
  z-index: 101;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    display: ${(props) => (props.collapsedMenu ? 'flex' : ' none')};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    z-index: 100;
    color: #fff;
    background-color: #001e2f;
  }
`;

const NavbarItems = styled.ul`
  display: flex;
  @media (max-width: 991px) {
    display: ${(props) => (props.collapsedMenu ? 'flex' : 'none')};
    flex: 1 1;
    /* flex-direction: ${(props) =>
      props.collapsedMenu ? 'row' : 'column'}; */
    flex-direction: column;
    justify-content: center;
  }
`;

const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 18px;

  @media (max-width: 991px) {
    margin: 0;
    align-items: center;
    font-size: 1.25rem;
    animation-name: fadeInUp;
    animation-duration: 0.4s;
    animation-fill-mode: backwards;
  }
`;

const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  @media (max-width: 991px) {
    padding: 1.5rem;
    margin-left: 10rem;
    margin-right: 10rem;
    transition: margin 0.3s ease-in-out;
    &:hover,
    &:focus {
      color: inherit;
      margin-left: 20rem;
      margin-right: 20rem;
      border-radius: 50px;
      background: linear-gradient(#6e3398, #6b5aed);
    }
  }
`;

const DarkModeContainer = styled.div`
  display: block;
  margin: auto;

  @media (min-width: 992px) {
    margin: 0 0 0 1.5rem;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;

const NewNavbar = ({ pages, darkMode }) => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);

  const toggleCollapsedMenu = () => {
    const body = document.querySelector('body');
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      body.classList.remove('no-scroll');
      setCollapsedMenu(true);
    } else {
      body.classList.add('nav-open');
      body.classList.add('no-scroll');
      setCollapsedMenu(false);
    }
  };

  return (
    <React.Fragment>
      <NavbarHeader>
        <div className='header__inner container container--full'>
          <NavbarItem>
            <NavbarLink to='/projects'>
              <h2>Portfolio</h2>
            </NavbarLink>
          </NavbarItem>
          <div className='header__navigation'>
            <nav
              className='nav js-nav'
              role='navigation'
              tabIndex='-1'
              aria-label='main menu'
            >
              <button
                className='nav__togglebtn js-nav-toggle'
                aria-expanded='false'
                aria-controls='nav-menu'
                onClick={toggleCollapsedMenu}
              >
                <span className='sr-only'>toggle menu</span>
                <span className='menuicon'>
                  <span className='menuicon__bar'></span>
                  <span className='menuicon__bar'></span>
                  <span className='menuicon__bar'></span>
                  <span className='menuicon__bar'></span>
                </span>
              </button>
              <NavbarContent collapsedMenu={collapsedMenu}>
                <NavbarItems collapsedMenu={collapsedMenu}>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/projects'>Projects</NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/blog'>Blog</NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/skills'>Skills</NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/about'>About</NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/contact'>Contact</NavbarLink>
                  </NavbarItem>
                </NavbarItems>
                <DarkModeContainer>
                  <WbIncandescentIcon />
                </DarkModeContainer>
                <div className='nav__darkmode'>
                  <button
                    className='lightswitch js-darkmode-toggle'
                    role='switch'
                    aria-checked='false'
                  >
                    <span className='sr-only'>toggle dark mode</span>
                    <svg
                      className='lightswitch__icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        className='lightswitch__icon__on'
                        d='M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z'
                      />
                      <path
                        className='lightswitch__icon__off'
                        d='M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836C14.836 7.272 13.563 6 12 6V4c2.667 0 4.836 2.169 4.836 4.836h-2z'
                      />
                    </svg>
                  </button>
                </div>
              </NavbarContent>
            </nav>
          </div>
        </div>
      </NavbarHeader>
    </React.Fragment>
  );
};

export default NewNavbar;
