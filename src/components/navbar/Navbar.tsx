import React, { useRef, useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles';

const { colors } = Theme;
const DarkModeSwitch = lazy(() => import('./DarkModeSwitch'));

const NavbarHeader = styled.header`
  position: relative;
  flex: none;
  padding-top: 2rem;
`;

const NavbarInnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 1450px;
  }
`;

const NavbarLogoContainer = styled.div`
  position: relative;
  touch-action: manipulation;
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const NavbarContainer = styled.nav`
  display: block;
  padding-right: 2rem;

  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`;

type NavbarButtonProps = {
  readonly darkMode: boolean;
};

const NavbarButton = styled.button<NavbarButtonProps>`
  border: 0;
  padding: 0;
  background-color: transparent;
  display: none;
  outline: none;
  color: ${(props) =>
    props.darkMode ? `${colors.textDark}` : `${colors.textLight}`};

  @media only screen and (max-width: 991px) {
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

type NavbarMenuIconProps = {
  readonly collapsedMenu: boolean;
};

const NavbarMenuIcon = styled.span<NavbarMenuIconProps>`
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

type NavbarMenuIconBarProps = {
  readonly collapsedMenu: boolean;
};

const NavbarMenuIconBar = styled.span<NavbarMenuIconBarProps>`
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

type NavbarLogoProps = {
  readonly darkMode: boolean;
};

const NavbarLogo = styled.h2<NavbarLogoProps>`
  color: ${(props) =>
    props.darkMode ? `${colors.textDark}` : `${colors.textLight}`} !important;
  font-weight: 600;
  position: relative;
  z-index: 101;
  line-height: 1;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

type NavbarContentProps = {
  readonly darkMode: boolean;
  readonly collapsedMenu: boolean;
};

const NavbarContent = styled.div<NavbarContentProps>`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 991px) {
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
    background-color: ${(props) =>
      props.darkMode
        ? `${colors.backgroundDark}`
        : `${colors.backgroundLight}`} !important;
  }
`;

type NavbarItemsProps = {
  readonly collapsedMenu: boolean;
};

const NavbarItems = styled.ul<NavbarItemsProps>`
  display: flex;

  @media only screen and (max-width: 991px) {
    display: ${(props) => (props.collapsedMenu ? 'flex' : 'none')};
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
  }
`;

type NavbarItemProps = {
  readonly isTitle: boolean;
};

const NavbarItem = styled.li<NavbarItemProps>`
  display: flex;
  font-weight: 600;
  margin-left: ${(props) => (props.isTitle ? '0' : '2rem')};
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 18px;

  @media only screen and (max-width: 991px) {
    margin: 0;
    align-items: center;
    font-size: 1.25rem;
    animation-name: fadeInUp;
    animation-duration: 0.4s;
    animation-fill-mode: backwards;
  }
`;

type NavbarLinkProps = {
  readonly darkMode: boolean;
};

const NavbarLink = styled(Link)<NavbarLinkProps>`
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
    color: ${(props) =>
      props.darkMode
        ? `${colors.textHoverDark}`
        : `${colors.textHoverLight}`} !important;
  }
  @media all and (orientation: landscape) {
    font-size: 1rem;
  }
`;

type NavbarProps = {
  darkMode: boolean;
  darkModeFunc: any;
};

const Navbar = ({ darkMode, darkModeFunc }: NavbarProps) => {
  const [collapsedMenu, setCollapsedMenu] = useState(false);

  const toggleCollapsedMenu = () => {
    const body = document.querySelector<HTMLElement>('body');
    if (!body) {
      throw new ReferenceError('Craft weight section not found.');
    }
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
            <NavbarItem isTitle={true}>
              <NavbarLink to='/projects' darkMode={darkMode}>
                <NavbarLogo darkMode={darkMode}>Portfolio</NavbarLogo>
              </NavbarLink>
            </NavbarItem>
          </NavbarLogoContainer>
          <NavbarContainer>
            <NavbarButton onClick={toggleCollapsedMenu} darkMode={darkMode}>
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
            <NavbarContent collapsedMenu={collapsedMenu} darkMode={darkMode}>
              <NavbarItems collapsedMenu={collapsedMenu}>
                <NavbarItem isTitle={false}>
                  <NavbarLink to='/projects' darkMode={darkMode}>
                    Projects
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem isTitle={false}>
                  <NavbarLink to='/blog' darkMode={darkMode}>
                    Blog
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem isTitle={false}>
                  <NavbarLink to='/skills' darkMode={darkMode}>
                    Skills
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem isTitle={false}>
                  <NavbarLink to='/about' darkMode={darkMode}>
                    About
                  </NavbarLink>
                </NavbarItem>
                <NavbarItem isTitle={false}>
                  <NavbarLink to='/contact' darkMode={darkMode}>
                    Contact
                  </NavbarLink>
                </NavbarItem>
              </NavbarItems>
              <DarkModeSwitch darkMode={darkMode} darkModeFunc={darkModeFunc} />
            </NavbarContent>
          </NavbarContainer>
        </NavbarInnerHeader>
      </NavbarHeader>
    </React.Fragment>
  );
};

export default Navbar;
