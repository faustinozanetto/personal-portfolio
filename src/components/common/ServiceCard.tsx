import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
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
  }
`;

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eceff8;
  border-radius: 5px;
  padding: 25px;
  transition: all 0.3s ease-out 0s;
  margin-top: 30px;
  text-align: center !important;
`;

const CardIcon = styled.div``;

const CardContent = styled.div`
  margin-top: 11px;
`;

const Title = styled.h4``;

type ServiceCardProps = {
  title: string;
};
const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <Wrapper>
      <Container>
        <CardIcon></CardIcon>
        <CardContent>
          <Title>{title}</Title>
        </CardContent>
      </Container>
    </Wrapper>
  );
};

export default ServiceCard;
