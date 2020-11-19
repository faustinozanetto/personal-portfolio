import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.scss';

const ThemeSwitcher = lazy(() => import('../theme/ThemeSwitcher'));

const NavbarLogo = styled.h2`
  color: white;
  font-weight: 600;
  -webkit-transform: scaleX(0.13846);
  transform: scaleX(0.13846);
  -webkit-animation: logo-typing 0.5s step-end 1s forwards;
  animation: logo-typing 0.5s step-end 1s forwards;
`;

const NewNavbar = ({ pages, darkMode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsedMenu = () => {
    const body = document.querySelector('body');
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      setCollapsed(true);
    } else {
      body.classList.add('nav-open');
      setCollapsed(false);
    }
  };

  return (
    <React.Fragment>
      <header className='header' role='banner'>
        <div className='header__inner container container--full'>
          <a
            href='/en'
            className='header__brand'
            rel='home'
            aria-label='Codista'
          >
            <NavbarLogo>PORTFOLIO</NavbarLogo>
          </a>
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
              <div className='nav__content'>
                <ul className='nav__menu' id='nav-menu'>
                  <li className='nav__item'>
                    <a href='/en/projects/' className='nav__link '>
                      Projects
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href='/en/services/' className='nav__link '>
                      Blog
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href='/en/team/' className='nav__link '>
                      Skills
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href='/en/blog/' className='nav__link '>
                      About
                    </a>
                  </li>
                  <li className='nav__item'>
                    <a href='/en/contact/' className='nav__link nav__link--cta'>
                      Contact
                    </a>
                  </li>
                </ul>
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
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NewNavbar;
