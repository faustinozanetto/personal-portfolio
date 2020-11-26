import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {} from 'styled-components';
import { Theme } from '../../styles';

const FooterWrapper = styled.footer`
  font-size: 16px;
  background: #000000;
  padding: 7em 0;
  z-index: 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  line-height: 1.8;
  font-weight: 400;
  color: #999999;
  text-align: left;
`;

const FooterContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const FooterTopContainer = styled.div`
  margin-bottom: 3rem !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

const FooterBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
`;

const FooterBottomContent = styled.div`
  text-align: center !important;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const FooterBottomText = styled.p``;

const LinksWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
`;

const LinksContainer = styled.div`
  margin-bottom: 1.5rem !important;
  display: block;
`;

const LinksTitle = styled.h2`
  color: #fff;
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
`;

const FooterAbout = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const LinksList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 10px;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
  box-sizing: border-box;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const NewFooter = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTopContainer>
          <LinksWrapper>
            <LinksContainer>
              <LinksTitle>About</LinksTitle>
              <FooterAbout>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </FooterAbout>
            </LinksContainer>
          </LinksWrapper>
          <LinksWrapper>
            <LinksContainer>
              <LinksTitle>Links</LinksTitle>
              <LinksList>
                <FooterLink to='/'>Home</FooterLink>
                <FooterLink to='/'>About</FooterLink>
                <FooterLink to='/'>Services</FooterLink>
                <FooterLink to='/'>Projects</FooterLink>
                <FooterLink to='/'>Contact</FooterLink>
              </LinksList>
            </LinksContainer>
          </LinksWrapper>
          <LinksWrapper>
            <LinksContainer>
              <LinksTitle>Services</LinksTitle>
              <LinksList>
                <ul>
                  <FooterLink to='/'>Home</FooterLink>
                </ul>
                <ul>
                  <FooterLink to='/'>About</FooterLink>
                </ul>
                <ul>
                  <FooterLink to='/'>Services</FooterLink>
                </ul>
                <ul>
                  <FooterLink to='/'>Projects</FooterLink>
                </ul>
                <ul>
                  <FooterLink to='/'>Contact</FooterLink>
                </ul>
              </LinksList>
            </LinksContainer>
          </LinksWrapper>
          <LinksWrapper>
            <LinksContainer>
              <LinksTitle>Have a Question?</LinksTitle>
            </LinksContainer>
          </LinksWrapper>
        </FooterTopContainer>
        <FooterBottomContainer>
          <FooterBottomContent>
            <FooterBottomText></FooterBottomText>
          </FooterBottomContent>
        </FooterBottomContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default NewFooter;
