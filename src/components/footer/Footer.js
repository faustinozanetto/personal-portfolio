import React from 'react';
import { Twitter, GitHub, Database, Mail, Send } from 'react-feather';
import styled from 'styled-components';
import { Theme } from '../../style';
const { colors } = Theme;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  left: 0px;
  bottom: 0px;
  width: 100%;
  & > * {
    align-self: center;
    text-align: center;
  }
  h5 {
    color: ${colors.black};
    font-weight: 600;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.div`
  align-self: center;
  margin-bottom: 0.5rem;
  width: 34rem;

  a {
    color: ${colors.black};
    font-weight: 900;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;
    word-wrap: break-word;

    &:hover {
      color: ${colors.grey};
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`;

const TwitterLink = styled.a`
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.brightNavyBlue};
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all 0.5s ease-in-out;
    color: ${colors.cobaltBlue};
  }
`;

const MailLink = styled.a`
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.brightNavyBlue};
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all 0.5s ease-in-out;
    color: ${colors.cobaltBlue};
  }
`;

const GitHubLink = styled.a`
  padding-left: 5px;
  padding-right: 5px;
  color: ${colors.brightNavyBlue};
  cursor: pointer;

  &:hover,
  &:focus {
    transition: all 0.5s ease-in-out;
    color: ${colors.cobaltBlue};
  }
`;

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
          <MailLink
            href='mailto:hello@covid19india.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Mail />
          </MailLink>
          <GitHubLink
            href='https://github.com/faustinozanetto'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </GitHubLink>
        </FooterLinks>
      </FooterContainer>
    </React.Fragment>
  );
};

export default React.memo(Footer);
