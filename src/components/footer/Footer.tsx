import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles';

const { colors } = Theme;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100%;
  background-color: ${colors.footerBackgroundLight};
`;

const FooterContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterNav = styled.nav`
  padding: 1rem;
  width: 100%;
`;

const FooterNavList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-column-gap: 1rem;
  column-gap: 1rem;
  grid-row-gap: 0.5rem;
  row-gap: 0.5rem;
  margin: 0;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const FooterNavItem = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media only screen and (min-width: 768px) {
    .FooterNavIcon:not(:first-child):before {
      content: '\B7';
      opacity: 0.5;
      display: inline-block;
      padding: 0 0.5rem;
    }
  }
`;

const FooterNavLink = styled(Link)`
  display: block;
  padding: 0.25rem 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover,
  &:focus {
    color: inherit;
  }
`;

const FooterSocial = styled.div`
  order: -1;
  display: flex;
  flex-direction: row;
  flex-basis: 1;
  justify-content: space-evenly;
  width: 130px;
`;

const FooterSocialLink = styled.a`
  padding: 0.5rem;
  color: #fff;

  & > * {
    &:hover,
    &:focus {
      color: #66fcf1;
    }
  }
`;

const FooterCopyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

type FooterProps = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <React.Fragment>
      <FooterWrapper>
        <FooterContainer>
          <FooterTop>
            <FooterNav>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink to='/'>Home</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to='/projects'>Projects</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to='/skills'>Skills</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to='/about'>About</FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNav>
            <FooterSocial>
              <FooterSocial>
                <FooterSocialLink href='https://twitter.com/' title='Twitter'>
                  <TwitterIcon />
                </FooterSocialLink>
                <FooterSocialLink href='https://github.com/' title='Github'>
                  <GitHubIcon />
                </FooterSocialLink>
              </FooterSocial>
            </FooterSocial>
          </FooterTop>
          <FooterBottom>
            <FooterCopyright>
              Copyright © 2020 All rights reserved. Faustino Zanetto
            </FooterCopyright>
          </FooterBottom>
        </FooterContainer>
      </FooterWrapper>
    </React.Fragment>
  );
};

export default Footer;
