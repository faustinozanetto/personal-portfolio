import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../styles';
import useDarkMode from 'use-dark-mode';
import './Navbar.scss';
const { colors } = Theme;
const DarkModeSwitch = lazy(() => import('./DarkModeSwitch.js'));

const NavbarHeader = styled.header`
  position: relative;
`;

const NavbarInnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 100%;
  max-width: 1280px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    /* padding-left: 4rem;
    padding-right: 4rem; */
  }
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
    flex-direction: column;
    justify-content: center;
  }
`;

const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: ${(props) =>
    props.darkMode ? `${colors.textDark}` : `${colors.textLight}`} !important;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${colors.textHoverLight};
  }
`;

const NewNavbar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);
  const darkMode = useDarkMode();

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
        <NavbarInnerHeader>
          <NavbarItem>
            <NavbarLink to='/projects'>
              <NavbarLogo>Portfolio</NavbarLogo>
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
                    <NavbarLink to='/projects' darkMode={darkMode.value}>
                      Projects
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/blog' darkMode={darkMode.value}>
                      Blog
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/skills' darkMode={darkMode.value}>
                      Skills
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/about' darkMode={darkMode.value}>
                      About
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem className='nav__item'>
                    <NavbarLink to='/contact' darkMode={darkMode.value}>
                      Contact
                    </NavbarLink>
                  </NavbarItem>
                </NavbarItems>
                <DarkModeSwitch />
              </NavbarContent>
            </nav>
          </div>
        </NavbarInnerHeader>
      </NavbarHeader>
    </React.Fragment>
  );
};

export default NewNavbar;
