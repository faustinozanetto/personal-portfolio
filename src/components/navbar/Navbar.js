import React, { useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles';

const { colors } = Theme;
const DarkModeSwitch = lazy(() => import('./DarkModeSwitch.js'));

const NavbarHeader = styled.header`
  position: relative;
  flex: none;
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
`;

const NavbarLogoContainer = styled.div`
  position: relative;
  touch-action: manipulation;
  padding-left: 2rem;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const NavbarContainer = styled.nav`
  display: block;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const NavbarButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  display: none;
  outline: none;
  color: ${(props) =>
    props.darkmode ? `${colors.textDark}` : `${colors.textLight}`};

  @media (max-width: 991px) {
    display: block;
    /* padding: 8px 10px; */
    position: relative;
    z-index: 101;
  }
`;

const NavbarButtonSpan = styled.span`
  position: absolute;
  outline: none;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const NavbarMenuIcon = styled.span`
  display: block;
  outline: none;
  width: 20px;
  height: 20px;
  position: relative;
  top: -2px;
  transform: rotate(0deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  margin: 0 auto;

  ${(props) =>
    props.collapsedMenu &&
    css`
      top: 3px;
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    `}
`;

const NavbarMenuIconBar = styled.span`
  display: block;
  position: absolute;
  outline: none;
  left: 0;
  right: 0;
  height: 4px;
  width: 100%;
  background-color: currentColor;
  transition: transform 0.25s ease-in-out;
  transition: transform 0.25s ease-in-out;

  &:first-child {
    top: 0;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 50%;
    -webkit-transform: rotate(0deg) translateX(4px);
    transform: rotate(0deg) translateX(4px);
  }

  &:nth-child(4) {
    top: 100%;
  }

  ${(props) =>
    props.collapsedMenu &&
    css`
      &:first-child {
        width: 0;
        top: 50%;
        left: 50%;
      }

      &:nth-child(4) {
        width: 0;
        top: 50%;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg) translateX(0);
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translateX(0);
      }
    `}
`;

const NavbarLogo = styled.h2`
  color: ${(props) =>
    props.darkmode ? `${colors.textDark}` : `${colors.textLight}`} !important;
  font-weight: 600;
  position: relative;
  z-index: 101;
  line-height: 1;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    overflow-y: scroll;
    display: ${(props) => (props.collapsedMenu ? 'flex' : ' none')};
    position: fixed;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 0;
    padding-top: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    z-index: 100;
    color: #fff;
    background-color: ${(props) =>
      props.darkmode
        ? `${colors.backgroundDark}`
        : `${colors.backgroundLight}`} !important;
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
  font-weight: 600;
  margin-left: ${(props) => (props.title ? '0' : '2rem')};
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
    props.darkmode ? `${colors.textDark}` : `${colors.textLight}`} !important;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: ${(props) =>
      props.darkmode
        ? `${colors.textHoverDark}`
        : `${colors.textHoverLight}`} !important;
  }
`;

const NewNavbar = ({ darkMode }) => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);

  const toggleCollapsedMenu = () => {
    const body = document.querySelector('body');
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      body.classList.remove('no-scroll');
      setCollapsedMenu(false);
    } else {
      body.classList.add('nav-open');
      body.classList.add('no-scroll');
      setCollapsedMenu(true);
    }
  };

  return (
    <React.Fragment>
      <NavbarHeader>
        <NavbarInnerHeader>
          <NavbarLogoContainer>
            <NavbarItem title={true}>
              <NavbarLink to='/projects' darkmode={darkMode.value}>
                <NavbarLogo darkmode={darkMode.value}>Portfolio</NavbarLogo>
              </NavbarLink>
            </NavbarItem>
          </NavbarLogoContainer>
          <NavbarContainer>
            <NavbarButton
              onClick={toggleCollapsedMenu}
              darkmode={darkMode.value}
            >
              <NavbarButtonSpan>toggle menu</NavbarButtonSpan>
              <NavbarMenuIcon collapsedMenu={collapsedMenu}>
                <NavbarMenuIconBar
                  collapsedMenu={collapsedMenu}
                ></NavbarMenuIconBar>
                <NavbarMenuIconBar
                  collapsedMenu={collapsedMenu}
                ></NavbarMenuIconBar>
                <NavbarMenuIconBar
                  collapsedMenu={collapsedMenu}
                ></NavbarMenuIconBar>
                <NavbarMenuIconBar
                  collapsedMenu={collapsedMenu}
                ></NavbarMenuIconBar>
              </NavbarMenuIcon>
            </NavbarButton>
            <NavbarContent
              collapsedMenu={collapsedMenu}
              darkmode={darkMode.value}
            >
              <NavbarItems collapsedMenu={collapsedMenu}>
                <NavbarItem title={false}>
                  <NavbarLink to='/projects' darkmode={darkMode.value}>
                    Projects
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem title={false}>
                  <NavbarLink to='/blog' darkmode={darkMode.value}>
                    Blog
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem title={false}>
                  <NavbarLink to='/skills' darkmode={darkMode.value}>
                    Skills
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem title={false}>
                  <NavbarLink to='/about' darkmode={darkMode.value}>
                    About
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem title={false}>
                  <NavbarLink to='/contact' darkmode={darkMode.value}>
                    Contact
                  </NavbarLink>
                </NavbarItem>
              </NavbarItems>
              <DarkModeSwitch darkMode={darkMode} />
            </NavbarContent>
          </NavbarContainer>
        </NavbarInnerHeader>
      </NavbarHeader>
    </React.Fragment>
  );
};

export default NewNavbar;
