import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

import './Footer.scss';

const FooterWrapper = styled.footer`
  background-color: #001e2f;
  /* background-color: var(--color-scale-100); */
  color: #e6f1f8;
  display: block;
  box-sizing: border-box;
  /* color: var(--color-scale-25); */
  a {
    color: #fff;
  }

  @media (min-width: 768px) {
    --spacing-x: 4rem;
    --spacing-y: 4rem;
  }
`;

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  box-sizing: border-box;

  @media (min-width: 768px) {
    --spacing-x: 4rem;
    --spacing-y: 4rem;
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    --spacing-x: 4rem;
    --spacing-y: 4rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterBrand = styled.a`
  display: none;
  padding: 0.5rem 0;
  opacity: 0.4;
  transition: opacity 0.2s ease-in-out;

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

const FooterNav = styled.nav`
  padding: 1rem;
  width: 100%;
`;

const FooterNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-column-gap: 1rem;
  -webkit-column-gap: 1rem;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  grid-row-gap: 0.5rem;
  row-gap: 0.5rem;
  margin: 0;

  @media (min-width: 768px) {
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const FooterNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FooterNavLink = styled.a`
  display: block;
  padding: 0.25rem 0;
  text-decoration: none;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: underline;
  }
`;

const FooterSocial = styled.p`
  order: -1;
  display: flex;
  align-items: center;
  margin: 0;

  @media (min-width: 992px) {
    order: 1;
  }
`;

const FooterSocialLink = styled.a`
  display: block;
  padding: 0.5rem;
`;

const FooterBottom = styled.div``;

const FooterCopyright = styled.p`
  margin: 0;
  opacity: 0.5;
`;

const NewFooter = () => {
  return (
    <React.Fragment>
      {/* <FooterWrapper>
        <FooterContainer>
          <FooterTop>
            <FooterBrand href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='130'
                height='28'
                viewBox='0 0 600 129'
                className='logo '
              >
                <path
                  className='logo__type'
                  d='M71.411 100.48c-9.005 8.85-18.485 12.324-30.018 12.324C18.801 112.805 0 99.218 0 71.569s18.801-41.235 41.393-41.235c11.059 0 19.591 3.16 28.123 11.534L57.35 54.664c-4.582-4.107-10.269-6.162-15.641-6.162-12.956 0-22.435 9.48-22.435 23.067 0 14.851 10.111 22.75 22.118 22.75 6.162 0 12.323-1.737 17.063-6.478l12.956 12.639zm83.576-28.911c0 22.435-15.325 40.603-40.603 40.603-25.279 0-40.445-18.168-40.445-40.603 0-22.277 15.483-40.604 40.287-40.604s40.761 18.327 40.761 40.604zm-61.773 0c0 11.849 7.11 22.908 21.171 22.908 14.062 0 21.17-11.06 21.17-22.908 0-11.691-8.215-23.067-21.17-23.067-13.903 0-21.171 11.376-21.171 23.067zM245.201 0v110.435h-18.01l-1.264-10.744c-6.004 9.32-15.641 12.48-25.12 12.48-22.909 0-40.13-15.166-40.13-40.76 0-26.859 16.905-40.762 39.655-40.762 8.217 0 21.013 4.424 25.595 12.481V0h19.274zm-65.249 71.412c0 13.586 9.795 22.907 22.118 22.907 12.166 0 22.593-8.848 22.593-22.907 0-13.587-10.427-22.75-22.593-22.75-12.322-.001-22.118 8.689-22.118 22.75zm81.999-39.183v78.205h19.275V32.229h-19.275zm87.528 21.013c-5.529-5.213-11.851-6.951-19.275-6.951-9.163 0-14.219 2.843-14.219 7.741 0 5.056 4.582 7.9 14.535 8.531 14.691.948 33.336 4.267 33.336 24.963 0 13.744-11.217 25.595-33.494 25.595-12.323 0-24.646-2.054-36.021-13.902l9.479-13.746c5.531 6.162 18.171 10.744 26.859 10.9 7.268.158 14.062-3.633 14.062-9.32 0-5.371-4.426-7.584-15.482-8.217-14.695-1.104-32.23-6.477-32.23-24.171 0-18.011 18.642-24.33 32.861-24.33 12.166 0 21.328 2.37 30.334 10.269l-10.745 12.638zm52.297-47.923v27.385h21.484v16.588h-21.645v33.652c0 7.425 4.105 11.06 10.11 11.06 3.002 0 6.478-.947 9.322-2.369l5.371 16.431c-5.53 2.213-10.111 3.16-15.958 3.317-16.903.633-27.964-9.006-27.964-28.438V49.292h-14.534V32.704H382.5V12.639l19.276-7.32zm93.687 27.227h18.484v77.888h-18.168l-.948-11.376c-4.423 9.163-16.59 13.589-25.277 13.746-23.066.156-40.131-14.062-40.131-41.393 0-26.86 17.854-40.92 40.604-40.763 10.426 0 20.381 4.898 24.804 12.64l.632-10.742zm-46.766 38.866c0 14.851 10.27 23.697 23.067 23.697 30.334 0 30.334-47.238 0-47.238-12.797 0-23.067 8.69-23.067 23.541z'
                ></path>
                <g className='logo__cursorgroup'>
                  <rect
                    className='logo__cursor'
                    x='526'
                    y='110'
                    width='74'
                    height='20'
                  ></rect>
                </g>
              </svg>
            </FooterBrand>
            <FooterNav>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink href='/privacy-policy/'>
                    Privacy Policy
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/privacy-policy/'>
                    Privacy Policy
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/terms-and-conditions/'>
                    Terms
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/support-packages/'>
                    Support
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/legal/'>Legal</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/de/website-agentur-wien/'>
                    Website Agency Vienna
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/de/onlineshop-shopify-agentur/'>
                    Onlineshop Shopify
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/products/tack-syncing-toggl-time-tracking-with-slack/'>
                    Tack
                  </FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNav>
            <FooterSocial>
              <FooterSocialLink href='https://twitter.com/' title='Twitter'>
                <TwitterIcon />
              </FooterSocialLink>
              <FooterSocialLink href='https://github.com/' title='Github'>
                <GitHubIcon />
              </FooterSocialLink>
            </FooterSocial>
          </FooterTop>
          <FooterBottom>
            <FooterCopyright>
              © 2020 Codista. All rights reserved.
            </FooterCopyright>
          </FooterBottom>
        </FooterContainer>
      </FooterWrapper> */}
      <footer class='footer' role='contentinfo'>
        <div class='footer__inner container container--full'>
          <div class='footer__top'>
            <a href='/en' class='footer__brand' aria-label='Go To Homepage'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='130'
                height='28'
                viewBox='0 0 600 129'
                class='logo '
              >
                <path
                  class='logo__type'
                  d='M71.411 100.48c-9.005 8.85-18.485 12.324-30.018 12.324C18.801 112.805 0 99.218 0 71.569s18.801-41.235 41.393-41.235c11.059 0 19.591 3.16 28.123 11.534L57.35 54.664c-4.582-4.107-10.269-6.162-15.641-6.162-12.956 0-22.435 9.48-22.435 23.067 0 14.851 10.111 22.75 22.118 22.75 6.162 0 12.323-1.737 17.063-6.478l12.956 12.639zm83.576-28.911c0 22.435-15.325 40.603-40.603 40.603-25.279 0-40.445-18.168-40.445-40.603 0-22.277 15.483-40.604 40.287-40.604s40.761 18.327 40.761 40.604zm-61.773 0c0 11.849 7.11 22.908 21.171 22.908 14.062 0 21.17-11.06 21.17-22.908 0-11.691-8.215-23.067-21.17-23.067-13.903 0-21.171 11.376-21.171 23.067zM245.201 0v110.435h-18.01l-1.264-10.744c-6.004 9.32-15.641 12.48-25.12 12.48-22.909 0-40.13-15.166-40.13-40.76 0-26.859 16.905-40.762 39.655-40.762 8.217 0 21.013 4.424 25.595 12.481V0h19.274zm-65.249 71.412c0 13.586 9.795 22.907 22.118 22.907 12.166 0 22.593-8.848 22.593-22.907 0-13.587-10.427-22.75-22.593-22.75-12.322-.001-22.118 8.689-22.118 22.75zm81.999-39.183v78.205h19.275V32.229h-19.275zm87.528 21.013c-5.529-5.213-11.851-6.951-19.275-6.951-9.163 0-14.219 2.843-14.219 7.741 0 5.056 4.582 7.9 14.535 8.531 14.691.948 33.336 4.267 33.336 24.963 0 13.744-11.217 25.595-33.494 25.595-12.323 0-24.646-2.054-36.021-13.902l9.479-13.746c5.531 6.162 18.171 10.744 26.859 10.9 7.268.158 14.062-3.633 14.062-9.32 0-5.371-4.426-7.584-15.482-8.217-14.695-1.104-32.23-6.477-32.23-24.171 0-18.011 18.642-24.33 32.861-24.33 12.166 0 21.328 2.37 30.334 10.269l-10.745 12.638zm52.297-47.923v27.385h21.484v16.588h-21.645v33.652c0 7.425 4.105 11.06 10.11 11.06 3.002 0 6.478-.947 9.322-2.369l5.371 16.431c-5.53 2.213-10.111 3.16-15.958 3.317-16.903.633-27.964-9.006-27.964-28.438V49.292h-14.534V32.704H382.5V12.639l19.276-7.32zm93.687 27.227h18.484v77.888h-18.168l-.948-11.376c-4.423 9.163-16.59 13.589-25.277 13.746-23.066.156-40.131-14.062-40.131-41.393 0-26.86 17.854-40.92 40.604-40.763 10.426 0 20.381 4.898 24.804 12.64l.632-10.742zm-46.766 38.866c0 14.851 10.27 23.697 23.067 23.697 30.334 0 30.334-47.238 0-47.238-12.797 0-23.067 8.69-23.067 23.541z'
                />
                <g class='logo__cursorgroup'>
                  <rect
                    class='logo__cursor'
                    x='526'
                    y='110'
                    width='74'
                    height='20'
                  />
                </g>
              </svg>
            </a>
            <FooterNav>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink href='/privacy-policy/'>
                    Privacy Policy
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/privacy-policy/'>
                    Privacy Policy
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/terms-and-conditions/'>
                    Terms
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/support-packages/'>
                    Support
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/legal/'>Legal</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/de/website-agentur-wien/'>
                    Website Agency Vienna
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/de/onlineshop-shopify-agentur/'>
                    Onlineshop Shopify
                  </FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink href='/en/products/tack-syncing-toggl-time-tracking-with-slack/'>
                    Tack
                  </FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNav>
            <p class='footer__social'>
              <FooterSocial>
                <FooterSocialLink href='https://twitter.com/' title='Twitter'>
                  <TwitterIcon />
                </FooterSocialLink>
                <FooterSocialLink href='https://github.com/' title='Github'>
                  <GitHubIcon />
                </FooterSocialLink>
              </FooterSocial>
            </p>
          </div>
          <div class='footer__bottom'>
            <p class='footer__copyright'>
              &copy; 2020 Codista. All rights reserved.<br></br>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default NewFooter;
