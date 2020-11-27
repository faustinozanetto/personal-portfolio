import React from 'react';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import styled from 'styled-components';

const SectionWrapper = styled.section``;

type ContentContainerProps = {
  readonly dark: boolean;
};

const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1rem;
  padding: 5rem 10rem 5rem 10rem;
  grid-gap: 3px;
  justify-items: center;
  align-items: top;
  background-color: ${(props) => (props.dark ? '#171717' : ' #262626')};
`;

const CardsContainer = styled.div``;

const Card = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  grid-gap: 3px;
  border-radius: 15px;
  width: 650px;
  height: 175px;
  background-color: #212121;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CardLeftContainer = styled.div`
  justify-items: center;
  align-items: center;
`;

const CardRightContainer = styled.div`
  justify-items: right;
  align-items: top;
`;

const CardTitle = styled.h2`
  font-weight: 500;
  color: #66fcf1;
`;

const CardText = styled.p`
  color: #a3a3a3;
  margin-top: 0;
`;

const IntroductionContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 350px;
`;

const IntroductionTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  margin-top: 2rem;
`;

const IntroductionText = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

type ContentSectionProps = {
  dark: boolean;
};

const ContentSection = ({ dark }: ContentSectionProps) => {
  return (
    <SectionWrapper>
      <ContentContainer dark={dark}>
        <CardsContainer>
          <Card>
            <CardLeftContainer>
              <CardTitle>Design</CardTitle>
              <CardText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis, nisi!
              </CardText>
            </CardLeftContainer>
            <CardRightContainer>
              <AutorenewIcon />
            </CardRightContainer>
          </Card>
          <Card>
            <CardLeftContainer>
              <CardTitle>Front-End</CardTitle>
              <CardText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis, nisi!
              </CardText>
            </CardLeftContainer>
          </Card>
          <Card>
            <CardLeftContainer>
              <CardTitle>Database</CardTitle>
              <CardText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis, nisi!
              </CardText>
            </CardLeftContainer>
          </Card>
        </CardsContainer>
        <IntroductionContainer>
          <IntroductionTitle>Hello! I´m Faustino Zanetto</IntroductionTitle>
          <IntroductionText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus eum natus recusandae obcaecati, reprehenderit iste animi
            quia officiis nemo voluptatem quae voluptas laborum quasi,
            cupiditate exercitationem deleniti veritatis temporibus repudiandae
            reiciendis nostrum! Qui cupiditate voluptate eveniet libero, omnis
            facere in!
          </IntroductionText>
        </IntroductionContainer>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default ContentSection;
