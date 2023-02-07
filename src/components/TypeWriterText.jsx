import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import Button from './Button';

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive; 
  }

  .text-1 {
    color: blueviolet;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.text}, 0.6)`}; 
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

function TypeWriterText() {
  return (
    <>
      <Title>
      0% Fees

        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('<span class="text-1">Hot collections!</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Create NFT marketplace.</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">Share Your collections!</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      
      <SubTitle>Buy aggregated NFTs from 5 blockchains. Lock your $RARI — unlock 0% fees.</SubTitle>

      <ButtonContainer>
        <Button text='Explore' link='#about' />
      </ButtonContainer>
    </>
  );
}

export default TypeWriterText;