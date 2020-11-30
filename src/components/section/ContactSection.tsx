import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../assets/images/about.jpg';
import { Theme } from '../../styles';

const { colors } = Theme;

const Contact = styled.div`
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

interface RowContainerProps {
  readonly dark: Boolean;
}

const RowContainer = styled.div<RowContainerProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};
  font-size: 14px;
  line-height: 22px;
  font-weight: ${(props) => (props.dark ? 400 : 600)};
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
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 576px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  background-size: cover;
  background-position: 100% 100%;
  height: 100%;
  border-radius: 0 3px 3px 0;
`;

const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 40px;
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

interface SubTitleProps {
  readonly dark: Boolean;
}

const SubTitle = styled.h2<SubTitleProps>`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 50px;
  line-height: 110%;
  margin: 0;
  color: ${(props) =>
    props.dark ? `${colors.textDark}` : `${colors.textLight}`};

  @media only screen and (max-width: 1024px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 30px;
  }
`;

const Form = styled.form``;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 30px;
`;

const FormCol = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const FirstNameFiled = styled.div``;

const LastNameField = styled.div``;

const EmailFiled = styled.div``;

const SubjectField = styled.div``;

interface InputProps {
  readonly dark: Boolean;
}

const Input = styled.input<InputProps>`
  border: 0;
  border-bottom: 1px solid #525252;
  border-radius: 0;
  background: transparent;
  padding: 0;
  color: #fff;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  font-size: 1rem;
  font-weight: ${(props) => (props.dark ? 400 : 500)};
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: visible;
  margin: 0;
  font-family: inherit;

  &:hover {
    border-color: ${(props) =>
      props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    border-color: ${(props) =>
      props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  }
`;

interface MessageProps {
  readonly dark: Boolean;
}

const Message = styled.textarea<MessageProps>`
  border: 0;
  border-bottom: 1px solid #525252;
  border-radius: 0;
  background: transparent;
  padding: 0;
  color: #fff;
  height: auto;
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow: auto;
  resize: vertical;
  margin: 0;
  font-family: inherit;

  &:hover {
    border-color: ${(props) =>
      props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
    border-color: ${(props) =>
      props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`};
  }
`;

interface SubmitButtonProps {
  readonly dark: Boolean;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  margin-top: 30px;
  background: linear-gradient(
    to right,
    ${(props) =>
        props.dark ? `${colors.textBigDark}` : `${colors.textBigLight}`}
      0%,
    #a98ff7
  );
  color: #fff;
  border: 0;
  margin-top: 50px;
  border-radius: 15px;
  padding: 13px 20px;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 99;
  transition: all 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

type ContactSectionProps = {
  dark: Boolean;
};

const ContactSection = ({ dark }: ContactSectionProps) => {
  return (
    <Contact>
      <Container>
        <BoxContent dark={dark}>
          <RowContainer dark={dark}>
            <LeftContainer>
              <LeftContent>
                <TitleContainer>
                  <Title dark={dark}>Contact Me</Title>
                </TitleContainer>
                <SubTitle dark={dark}>Realize your dream with me</SubTitle>
              </LeftContent>
            </LeftContainer>
            <RightContainer>
              <RightContent>
                <Form action='#' method='post' autoComplete='off'>
                  <FormRow>
                    <FormCol>
                      <FirstNameFiled>
                        <Input
                          dark={dark}
                          type='text'
                          placeholder='First Name'
                          autoComplete='off'
                        />
                      </FirstNameFiled>
                    </FormCol>
                    <FormCol>
                      <LastNameField>
                        <Input
                          dark={dark}
                          type='text'
                          placeholder='Last Name'
                          autoComplete='off'
                        />
                      </LastNameField>
                    </FormCol>
                  </FormRow>
                  <FormRow>
                    <FormCol>
                      <EmailFiled>
                        <Input
                          dark={dark}
                          type='email'
                          placeholder='Email Address'
                          autoComplete='off'
                        />
                      </EmailFiled>
                    </FormCol>
                    <FormCol>
                      <SubjectField>
                        <Input
                          dark={dark}
                          type='text'
                          placeholder='Subject'
                          autoComplete='off'
                        />
                      </SubjectField>
                    </FormCol>
                  </FormRow>
                  <FormRow>
                    <FormCol>
                      <Message
                        dark={dark}
                        cols={30}
                        rows={5}
                        name='form-message'
                        placeholder='Message'
                      ></Message>
                    </FormCol>
                  </FormRow>
                  <SubmitButton dark={dark} type='submit' name='submit'>
                    Send Message
                  </SubmitButton>
                </Form>
              </RightContent>
            </RightContainer>
          </RowContainer>
        </BoxContent>
      </Container>
    </Contact>
  );
};

export default ContactSection;
