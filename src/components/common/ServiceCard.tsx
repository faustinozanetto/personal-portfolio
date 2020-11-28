import React from 'react';
import styled from 'styled-components';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  flex: 0 0 33.333333%;
  max-width: 33.333333%;

  @media only screen and (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 40%;
  }

  @media only screen and (mac-width: 576px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  /* @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 576px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  } */
`;

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eceff8;
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
  text-align: center !important;
  transition: all 0.3s ease-out 0s;

  &:hover,
  &:focus {
    box-shadow: 18px 28px 61px -19px rgba(0, 0, 0, 0.52);
  }
`;

const CardIcon = styled.div`
  & > * {
    display: inline-block;
    font-size: 60px;
    color: #754ef9;
  }
`;

const CardContent = styled.div`
  margin-top: 11px;
`;

const Title = styled.h4`
  font-size: 25px;
  font-weight: 600;
  color: #32333c;
  margin: 0;
  padding-bottom: 1rem;
  line-height: 1.2;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #8a8fa3;
  margin: 0;
`;

type ServiceCardProps = {
  title: string;
  text: string;
};
const ServiceCard = ({ title, text }: ServiceCardProps) => {
  return (
    <Wrapper>
      <Container>
        <CardIcon>
          <AssignmentIndIcon fontSize={'large'} />
        </CardIcon>
        <CardContent>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </CardContent>
      </Container>
    </Wrapper>
  );
};

export default ServiceCard;
