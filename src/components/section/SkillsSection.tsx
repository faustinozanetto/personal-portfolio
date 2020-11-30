import React from 'react';
import styled from 'styled-components';

const SkillElem = styled.li`
  margin-bottom: 20px;
`;

const SkillTitle = styled.div``;

const TitleSpan = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  display: inline-block;
  color: #fff;
`;

const Progress = styled.div`
  height: 5px;
  border-radius: 0;
  background: #414141;
  display: flex;
  overflow: hidden;
  font-size: 0.75rem;
`;

interface ProgressBarProps {
  readonly amount: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
  background: linear-gradient(to right, #a98ff7 0%, #8ff7f3 100%);
  width: ${(props) => props.amount + '%'};
`;

type SkillProps = {
  name: string;
  amount: string;
};

const Skill = ({ name, amount }: SkillProps) => {
  return (
    <SkillElem>
      <SkillTitle>
        <TitleSpan>{name}</TitleSpan>
      </SkillTitle>
      <Progress>
        <ProgressBar amount={amount}></ProgressBar>
      </Progress>
    </SkillElem>
  );
};

const Skills = styled.div`
  padding: 27px 0;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  transition: max-width 200ms ease-in-out;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const BoxContent = styled.div`
  background: #262626;
  padding: 40px;
  border-radius: 3px;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 110%;
  margin: 0;
  color: #8ff7f3;
`;

const SkillsContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const SkillsContent = styled.div`
  width: 1030px;
  margin-right: 10px;
  position: relative;
  min-height: 1px;
  -webkit-tap-highlight-color: transparent;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const RightContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const LeftContent = styled.div``;

const TitleContainer = styled.div`
  text-align: left;

  & > h3 {
    color: #8ff7f3;
    font-size: 22px;
    font-weight: 300;
    display: inline-block;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & > h2 {
    font-size: 50px;
    font-weight: 900;

    & > span {
      color: #8ff7f3;
    }
  }
`;

const RightContent = styled.div``;

const SkillBars = styled.div`
  background: transparent;
  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const SkillsBody = styled.div`
  padding-left: 32px;
  flex: 1 1 auto;
  padding: 1.25rem;
`;

const SkillsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const skills = [
  { name: 'JavaScript', amount: '70' },
  { name: 'React', amount: '60' },
  { name: 'Java', amount: '85' },
  { name: 'HTML CSS', amount: '90' },
  { name: 'Python', amount: '25' },
];

const SkillsSection = () => {
  return (
    <Skills>
      <Container>
        <BoxContent>
          <TitleSection>
            <Title>Skills</Title>
          </TitleSection>
          <SkillsContainer>
            <SkillsContent>
              <Row>
                <LeftContainer>
                  <LeftContent>
                    <TitleContainer>
                      <h3>Skill</h3>
                      <h2>
                        Skills I <span>Work</span> with
                        <span>and understand</span>
                      </h2>
                    </TitleContainer>
                  </LeftContent>
                </LeftContainer>
                <RightContainer>
                  <RightContent>
                    <SkillBars>
                      <SkillsBody>
                        <SkillsList>
                          {skills.map((skill, index) => {
                            return (
                              <Skill
                                key={index}
                                name={skill.name}
                                amount={skill.amount}
                              />
                            );
                          })}
                        </SkillsList>
                      </SkillsBody>
                    </SkillBars>
                  </RightContent>
                </RightContainer>
              </Row>
            </SkillsContent>
          </SkillsContainer>
        </BoxContent>
      </Container>
    </Skills>
  );
};

export default SkillsSection;
