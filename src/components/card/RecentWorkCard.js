import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap;
  align-items: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  width: 350px;
  height: 220px;
  box-sizing: border-box;
  margin: 1rem 1rem; */
`;

const CardContentContainer = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -175px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;

  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg)
    no-repeat;
`;

const CardTitleContainer = styled.div`
  text-align: center;
  margin: 70px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
`;

const CardTextSeparator = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

const CardIntro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

const CardInfoContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom 0.3s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
`;

const CardText = styled.p``;

const CardGradientOverlay = styled.div`
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: -moz-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: -o-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  width: 350px;
  height: 500px;
  position: absolute;
  top: 350px;
  left: 0;
  z-index: 15;

  &:hover {
    ${CardInfoContainer} {
      opacity: 1;
      bottom: 120px;
    }
  }
`;

const RecentWorkCard = ({ cardTitle }) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <CardTitleContainer>
          <CardTitle>SPRING FEVER</CardTitle>
          <CardTextSeparator />
          <CardIntro>Yllamco laboris nisi ut aliquip ex ea commodo.</CardIntro>
        </CardTitleContainer>
        <CardInfoContainer>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius
            amet libero, unde error blanditiis cumque quos possimus ducimus
            cupiditate!
          </CardText>
        </CardInfoContainer>
        <CardGradientOverlay />
      </CardContentContainer>
    </CardContainer>
  );
};

export default RecentWorkCard;
