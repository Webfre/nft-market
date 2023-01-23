import React from 'react';
import styled from 'styled-components';
import {nftSmircs} from '../data';

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
  border-top: 2px solid  ${props => props.theme.text};
  border-top: 2px solid  ${props => props.theme.text};
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
    margin-right: 5rem;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
      margin-right: 5rem;
    }
  }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-shadow: 1px 1px 2px ${props => props.theme.text};

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
    padding: 2rem 0;
    width: 100%;
  }
`

const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
  font-size: ${props => props.theme.fontxl};

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`

const JoinNow = styled.button`
  display: inline-block;
  font-weight: 600;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
    background-color: antiquewhite;
    color: black;
  }

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${props => props.theme.fontsm};
  }
`

function Banner() {
  return (
    <Section>
      <ImgContainer>
        {
          nftSmircs.map(({link, number, title}) => {
            return (
              <img key={number} src={link} alt={title} />
            )
          })
        }
      </ImgContainer>
      <Title>Join the <br /> .NFT club </Title>
      <BtnContainer>
        <JoinNow>Join Us</JoinNow>
      </BtnContainer>
    </Section>
  )
}

export default Banner;