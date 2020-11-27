import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 25px;
`;

const Header = styled.div`
  position: relative;
`;

const Title = styled.h6`
  font-size: 16px;
  font-weight: 400;
  color: #32333c;
  margin: 0;
  line-height: 1.2;
`;

const Percentage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 16px;
  color: #32333c;
  font-weight: 400;
  display: flex;
`;

const PercentageContent = styled.div`
  font-size: 16px;
  color: #32333c;

  & > span {
    display: inline-block;
  }
`;

const Bar = styled.div`
  margin-top: 15px;
`;

const BarContent = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: #d9d9d9;
  position: relative;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  border-radius: 5px;
  background-color: #754ef9;
  transition: all 2s ease-out 0s;
  width: 80%;
`;

type ProgressBarProps = {
  title: string;
};

const ProgressBar = ({ title }: ProgressBarProps) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Percentage>
          <PercentageContent>
            <span>80</span>
          </PercentageContent>
          %
        </Percentage>
      </Header>
      <Bar>
        <BarContent>
          <Progress></Progress>
        </BarContent>
      </Bar>
    </Container>
  );
};

export default ProgressBar;
