import React, { lazy } from 'react';
import styled from 'styled-components';

const ServiceCard = lazy(() => import('../common/ServiceCard'));

type WrapperProps = {
  readonly dark: boolean;
};
const Wrapper = styled.section<WrapperProps>`
  padding-bottom: 130px;
  padding-top: 125px;
  display: block;
  background-color: ${(props) => (props.dark ? '#fbfbfb' : ' #f8f9fa')};

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  @media (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /* max-width: 1140px; */

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media only screen and(min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and(min-width: 576px) {
    max-width: 540px;
  }
`;

const HeaderWrapper = styled.div`
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`;

const HeaderContent = styled.div`
  text-align: center !important;
`;

const HeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 45px;
  color: #000;
  padding-bottom: 20px;
  margin: 0;
  line-height: 1.2;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const BottomContainer = styled.div`
  justify-content: center !important;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const servicesData = [
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
  {
    title: 'Web Design',
    text:
      'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.',
  },
];

type ServicesSectionProps = {
  dark: boolean;
};
const ServicesSection = ({ dark }: ServicesSectionProps) => {
  return (
    <Wrapper dark={dark}>
      <Container>
        <HeaderWrapper>
          <HeaderContainer>
            <HeaderContent>
              <HeaderTitle>Services</HeaderTitle>
            </HeaderContent>
          </HeaderContainer>
        </HeaderWrapper>
        <Content>
          <BottomContainer>
            {servicesData.map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={service.title}
                  text={service.text}
                />
              );
            })}
          </BottomContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ServicesSection;
