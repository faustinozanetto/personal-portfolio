import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles';

const { colors } = Theme;

const SkillElem = styled.li`
  margin-bottom: 20px;
`;

const SkillTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

interface TitleSpanProps {
  readonly dark: Boolean;
}

const TitleSpan = styled.span<TitleSpanProps>`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};
  font-weight: ${(props) => (props.dark ? 400 : 600)};
`;

interface ExperienceSpanProps {
  readonly dark: Boolean;
}

const ExperienceSpan = styled.span<ExperienceSpanProps>`
  font-size: 13px;
  padding-left: 10px;
  margin-left: auto;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};
  font-weight: ${(props) => (props.dark ? 400 : 600)};
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

interface ProgressBarProps {
  readonly dark: Boolean;
}

const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
  background: linear-gradient(
    to right,
    ${(props) =>
        props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`}
      0%,
    #a98ff7
  );
  width: ${(props) => props.amount + '%'};
`;

type SkillProps = {
  name: string;
  experience: string;
  amount: string;
  dark: Boolean;
};

const Skill = ({ name, experience, amount, dark }: SkillProps) => {
  return (
    <SkillElem>
      <SkillTitle>
        <TitleSpan dark={dark}>{name}</TitleSpan>
        <ExperienceSpan dark={dark}>{experience}</ExperienceSpan>
      </SkillTitle>
      <Progress>
        <ProgressBar dark={dark} amount={amount}></ProgressBar>
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
interface BoxContentProps {
  readonly dark: Boolean;
}

const BoxContent = styled.div<BoxContentProps>`
  padding: 40px;
  background: ${(props) =>
    props.dark
      ? `${colors.sectionBackgroundDark}`
      : `${colors.sectionBackgroundLight}`};
  border-radius: 10px;
`;

const TitleSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

interface TitleProps {
  readonly dark: Boolean;
}

const Title = styled.h3<TitleProps>`
  font-weight: 700;
  color: ${(props) =>
    props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  font-size: 28px;
  line-height: 110%;
  margin: 0;
`;

const SkillsContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const SkillsContent = styled.div`
  margin-right: 10px;
  position: relative;
  min-height: 1px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 100%;
  padding-right: 150px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media only screen and (max-width: 1024px) {
    padding-right: 30px;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
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
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const LeftContent = styled.div``;

interface TitleContainerProps {
  readonly dark: Boolean;
}

const TitleContainer = styled.div<TitleContainerProps>`
  text-align: left;

  & > h3 {
    color: ${(props) =>
      props.dark ? `${colors.textBigLight}` : `${colors.textBigDark}`};
    font-size: 22px;
    font-weight: 300;
    display: inline-block;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & > h2 {
    color: ${(props) =>
      props.dark ? `${colors.textDark}` : `${colors.textLight}`};
    font-size: 50px;
    font-weight: 900;

    @media only screen and (max-width: 1024px) {
      font-size: 40px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 35px;
      text-align: center;
    }

    @media only screen and (max-width: 576px) {
      font-size: 30px;
      text-align: center;
    }

    & > span {
      color: ${(props) =>
        props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
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
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-bottom: 1.25rem;
`;

const SkillsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const skills = [
  { name: 'JavaScript', experience: 'Intermediate', amount: '70' },
  { name: 'React', experience: 'Beginner', amount: '60' },
  { name: 'Java', experience: 'Intermediate', amount: '85' },
  { name: 'HTML CSS', experience: 'Intermediate', amount: '90' },
  { name: 'Python', experience: 'Beginner', amount: '25' },
];

interface InfoTextProps {
  readonly dark: Boolean;
}

const InfoText = styled.p<InfoTextProps>`
  margin: 0;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};
  font-size: 18px;
  line-height: 22px;
  font-weight: ${(props) => (props.dark ? 400 : 500)};

  @media only screen and (max-width: 768px) {
    text-align: center;
    text-justify: justify;
  }
`;

type SkillsSectionProps = {
  dark: Boolean;
};

const SkillsSection = ({ dark }: SkillsSectionProps) => {
  return (
    <Skills>
      <Container>
        <BoxContent dark={dark}>
          <TitleSection>
            <Title dark={dark}>Skills</Title>
          </TitleSection>
          <SkillsContainer>
            <SkillsContent>
              <RowContainer>
                <LeftContainer>
                  <LeftContent>
                    <TitleContainer dark={dark}>
                      <h2>
                        Skills I <span>Use </span>
                        and <span> Understand</span>
                      </h2>
                      <InfoText dark={dark}>
                        These are some of the skills I have learned with the
                        years and use from now and then, I´m in the process of
                        learning new technologies!
                      </InfoText>
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
                                experience={skill.experience}
                                amount={skill.amount}
                                dark={dark}
                              />
                            );
                          })}
                        </SkillsList>
                      </SkillsBody>
                    </SkillBars>
                  </RightContent>
                </RightContainer>
              </RowContainer>
            </SkillsContent>
          </SkillsContainer>
        </BoxContent>
      </Container>
    </Skills>
  );
};

export default SkillsSection;
