import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThemeSwitcher = lazy(() => import('../theme/ThemeSwitcher'));

const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const NavbarLink = styled(Link)`
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
  color: gray;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all 0.5s;
    color: black;
  }
`;

const Navbar = ({ pages, darkMode }) => {
  return (
    <React.Fragment>
      <NavbarContainer>
        {pages.map((page, index) => {
          return (
            <NavbarLink to={page.pageLink} key={index}>
              <span>{page.displayName}</span>
            </NavbarLink>
          );
        })}
        <ThemeSwitcher {...{ darkMode }} />
      </NavbarContainer>
    </React.Fragment>
  );
};

export default Navbar;
