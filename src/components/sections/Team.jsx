import React from 'react';
import styled from 'styled-components';

import {nftTeam} from '../../data';
import ConfettiComponent from '../Confetti';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
`; 

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  transition all 0.3s ease; 
  z-index: 5;
  backdrop-filter: blur(4);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.1);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImgContainer = styled.div`
  width: 80%;
  background-color: ${props => props.theme.caruselColor};
  border: 1px solid ${props => props.theme.text};
  margin: 0 auto;
  border-radius: 20px;
  cursor: pointer;
  padding: 1rem;


  img {
    width: 100%;
    height: auto;
    transition all 0.3s ease; 
  }
`;

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({link, name='', position=''}) => {
  return (
    <Item>
      <ImgContainer>
        <img src={link} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

function Team() {
  return (
    <Section id='team'>
      <ConfettiComponent/>
      <Title>Team</Title>
      <Container>
        {
          nftTeam.map(({link, name, position}, id) => {
            return (
              <MemberComponent key={id} link={link} name={name} position={position} />
            );
          })
        }
      </Container>
    </Section>
  );
}

export default Team;