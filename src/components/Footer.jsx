import React from 'react';
import styled from 'styled-components';

import {FaFacebook} from 'react-icons/fa';
import {SiTelegram} from 'react-icons/si';
import {BsLinkedin} from 'react-icons/bs';
import {ImTwitter} from 'react-icons/im';

import Banner from './Banner';
import Logo from './Logo';


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  position: relative;

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  border-bottom: 1px solid ${props => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h2 {
      font-size: ${props => props.theme.fontxxl};
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconsList = styled.ul`
  font-size: ${props => props.theme.fontxl};
  display: flex;
  align-content: center;
  margin: 1rem auto;

  &>* {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <Section>
      <Banner/>

      <Container>
        <Left>
          <Logo/>
          <IconsList>
            <a href='#' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><ImTwitter/></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><FaFacebook/></a>
            <a href='#' target='_blank' rel='noopener noreferrer'><SiTelegram/></a>
          </IconsList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo('home')} >Home</Item>
          <Item onClick={() => scrollTo('about')} >About</Item>
          <Item onClick={() => scrollTo('roadmap')} >Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')} >Showcase</Item>
          <Item onClick={() => scrollTo('team')} >Team</Item>
          <Item onClick={() => scrollTo('faq')} >Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Meta Club. All rights reserved 
        </span>
        <span>
          Made with 👨‍💻 by <a href='https://vk.com/id367096719' target='_blank' rel='noopener noreferrer'>
            Roman
          </a>
        </span>
      </Bottom>
    </Section>
  );
}

export default Footer;