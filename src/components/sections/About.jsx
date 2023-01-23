import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {dark} from '../../styles/Themes';
import Carousel from '../Carousel';
import Button from '../Button';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    /* 1024px */
    width: 100%;
    flex-direction: column;

    &>*:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    &>*:last-child {
      width: 90%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontlg};
  }
`

const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 1rem 0;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsd};
  }
`

const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  margin: 1rem 0;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxs};
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem 0;
  align-self: start;
  display: flex;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }   
  }
`

function About() {
  return (
    <Section id='about'>
      <Container>
        <Box><Carousel/></Box>
        <Box>
          <Title>Welcome to the .NFT</Title>
          <SubText>We’ve built a total of 17 white glove community marketplaces for high-profile collections like Pixel Vault, v1 Punks, mfers, rektguy and more</SubText>
          <SubTextLight>And with a combined audience of about 1,3 million, we're humbled to see how many people follow us at .NFT</SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark} >
              <Button text='JOIN OUR COMMUNITY' link='#' />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About;