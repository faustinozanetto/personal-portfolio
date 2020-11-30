import React from 'react';
import styled from 'styled-components';

const projectImage = require('../../assets/images/portfolio1.jpg');

const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  opacity: 0;
  line-height: 24px;
`;

const SubTitle = styled.p`
  opacity: 0;
`;

const CardContainer = styled.div`
  box-shadow: 0px 2px 8px 0px gray;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  position: relative;
  width: 320px;
  margin: 0.5rem;

  opacity: 1;
  transform: scale(1) translate3d(0px, 0px, 0px);
  backface-visibility: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;

  &:hover ${Title} {
    opacity: 1;
  }

  &:hover ${SubTitle} {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 0.35rem;
    margin-top: 0.35rem;
    width: 250px;
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
