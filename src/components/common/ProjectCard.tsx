import React from 'react';
import styled from 'styled-components';

const projectImage = require('../../assets/images/portfolio1.jpg');

const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  opacity: 0;
  line-height: 24px;
  text-align: center;
`;

const SubTitle = styled.p`
  opacity: 0;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  object-fit: cover;
  max-width: 100%;
  overflow-x: hidden;
  width: 230px;
  height: 230px;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  background-color: white;
  border-radius: 5px;
  margin: 0.5rem;

  &:hover ${Title} {
    opacity: 1;
  }

  &:hover ${SubTitle} {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    width: 175px;
    height: 175px;
    max-width: 100%;
    overflow-x: hidden;
  }
`;

const ImageOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;

const ImageSection = styled.div`
  position: relative;
  color: #fafafa;
  font-size: 14px;
  line-height: 22px;

  &:hover ${ImageOverlay} {
    opacity: 1;
  }
`;

const ImageWrapper = styled.a`
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 3px;
  vertical-align: middle;
  border-style: none;
`;

const CaptionTitle = styled.div`
  overflow: hidden;
`;

const CaptionSubTitle = styled.div`
  overflow: hidden;
`;

const Caption = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;
  right: 30px;
`;

const ProjectCard = () => {
  return (
    <CardContainer>
      <ImageSection>
        <ImageWrapper href=''>
          <Image src={projectImage} alt='' />
          <ImageOverlay></ImageOverlay>
          <Caption>
            <CaptionTitle>
              <Title>This is the title</Title>
            </CaptionTitle>
            <CaptionSubTitle>
              <SubTitle>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
                accusantium.
              </SubTitle>
            </CaptionSubTitle>
          </Caption>
        </ImageWrapper>
      </ImageSection>
    </CardContainer>
  );
};

export default ProjectCard;
