import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import styled from 'styled-components';

const ThemeSwitcher = lazy(() => import('../theme/ThemeSwitcher'));

const NavbarSection = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  display: block;

  @media only screen and(max-width: 992px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const NavbarContainer = styled.div`
  padding: 0;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarLogo = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const NavbarLink = styled(Link)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all 0.5s;
    color: black;
  }
`;

const CollapsedNavIcon = styled(FormatAlignJustifyIcon)`
  display: none;
  color: black;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Navbar = ({ pages, darkMode }) => {
  return (
    <React.Fragment>
      <NavbarSection>
        <NavbarContainer>
          <NavbarLogo to='/'>
            <h2>Stereo</h2>
          </NavbarLogo>
          <NavbarLinks>
            {pages.map((page, index) => {
              return (
                <NavbarLink to={page.pageLink} key={index}>
                  <span>{page.displayName}</span>
                </NavbarLink>
              );
            })}
          </NavbarLinks>
          {/* <ThemeSwitcher {...{ darkMode }} /> */}
        </NavbarContainer>
      </NavbarSection>
    </React.Fragment>
  );
};

export default Navbar;
