import React from 'react';
import { Twitter, GitHub, Database, Mail, Send } from 'react-feather';
import styled from 'styled-components';
import { theme } from '../../style';
const { colors } = theme;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0px;
  bottom: 0px;
  /* height: 30px; */
  width: 100%;

  & > * {
    align-self: center;
    text-align: center;
  }

  h5 {
    color: $gray;
    font-weight: 600;
    margin: 0;
    margin-bottom: 2rem;
  }

  svg {
    margin-right: 0.5rem;
    padding: 0.25rem;
  }
`;

const FooterLink = styled.div`
  align-self: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  width: 34rem;

  a {
    background: ${colors.black};
    color: $blue;
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    transition: background 0.2s ease-in-out;
    word-wrap: break-word;

    &:hover {
      background: $blue-hover;
    }
  }

  h3 {
    color: $gray-dark;
    font-weight: 900;
    margin-bottom: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TwitterLink = styled.a``;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContainer>
        <FooterLink>
          <a
            href='https://github.com/covid19india'
            target='_blank'
            rel='noopener noreferrer'
          >
            Portfolio
          </a>
        </FooterLink>
        <h5>Made with Love from Argentina</h5>
        <FooterLinks>
          <TwitterLink
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </TwitterLink>
        </FooterLinks>
      </FooterContainer>
    </React.Fragment>
  );
};

export default React.memo(Footer);
