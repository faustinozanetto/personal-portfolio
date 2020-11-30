import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #fffeff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  width: 200px;
  height: 250px;
  box-sizing: border-box;
  margin: 1rem 1rem;
`;

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
`;

const CardTitle = styled.h3`
  color: #3e3f4f;
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 1rem;
`;

const CardIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  * {
    margin-left: 15px;
  }
`;

const LanguageCard = ({ cardTitle }) => {
  return (
    <CardContainer>
      <CardTitle>{cardTitle}</CardTitle>
      <CardContentContainer>
        <CardIconContainer>
          <BackupIcon />
          <h2>C++</h2>
        </CardIconContainer>
      </CardContentContainer>
    </CardContainer>
  );
};

export default LanguageCard;
