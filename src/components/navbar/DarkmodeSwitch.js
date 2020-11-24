import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const DarkModeContainer = styled.div`
  display: block;
  margin: auto;

  @media (min-width: 992px) {
    margin: 0 0 0 1.5rem;
    transform: translateY(-1px);
  }
`;

const DarkModeButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  color: inherit;
  cursor: pointer;
  @media (min-width: 992px) {
    color: #001e2f;

    &:hover {
      background-color: ${(props) =>
        props.darkMode ? 'red' : 'blue'} !important;
    }
  }
`;

const DarkModeSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const DarkModeSvg = styled.svg`
  margin: auto;
  fill: currentColor;
`;

const DarkModeOn = styled.path``;

const DarkModeOff = styled.path``;

const DarkModeSwitch = () => {
  const darkMode = useDarkMode();
  return (
    <DarkModeContainer>
      <DarkModeButton onClick={darkMode.toggle} darkMode={darkMode.value}>
        <DarkModeSpan>toggle dark mode</DarkModeSpan>
        <DarkModeSvg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          {darkMode.value ? (
            <DarkModeOn d='M9 20h6v2H9zm7.906-6.288C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7S5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363zm-2.724.213c-.434.617-.796 2.075-1.006 3.075h-2.351c-.209-1.002-.572-2.463-1.011-3.08a20.502 20.502 0 0 0-1.196-1.492C7.644 11.294 7 10.544 7 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.521-.643 2.274-1.615 3.413-.373.438-.796.933-1.203 1.512z' />
          ) : (
            <DarkModeOff d='M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836C14.836 7.272 13.563 6 12 6V4c2.667 0 4.836 2.169 4.836 4.836h-2z' />
          )}
        </DarkModeSvg>
      </DarkModeButton>
    </DarkModeContainer>
  );
};

export default DarkModeSwitch;
