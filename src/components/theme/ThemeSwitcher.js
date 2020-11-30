import React, { memo } from 'react';
import * as Icon from 'react-feather';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  cursor: pointer;
  align-self: center;
  padding: 15px;
`;

const ThemeSwitcher = ({ darkMode }) => {
  return (
    <SwitchContainer onClick={darkMode.toggle}>
      <div>{darkMode.value ? <Icon.Sun /> : <Icon.Moon />}</div>
    </SwitchContainer>
  );
};

export default memo(ThemeSwitcher);
