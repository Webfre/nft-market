import React, { useRef, useLayoutEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import styled from 'styled-components';

import DrawSwg from '../DrawSwg';

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
  width: 70%;
  height: 200vh;
  background-color: ${props => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  &>*:nth-of-type(2n +1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align:right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align:left;

        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  &>*:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align:left;

      @media (max-width: 48em) {
        border-radius: 50px 0 50px 0;
        text-align:right;

        p {
          border-radius: 40px 0 40px 0;
        }
      }
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.caruselColor};
  color: ${props => props.theme.text};
  padding: 1em;
  position: relative;
  border: 1px solid ${props => props.theme.text};
`;

const SubTitle = styled.span`
  font-size: ${props => props.theme.fontxl};
  color: ${props => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxs};
  }
`;

const RoadMapItem = ({title, subtext, addToRef}) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

function Roadmap() {
  const revelRefs = useRef([]);
  revelRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRef = (el) => {
    if (el && !revelRefs.current.includes(el)) {
      revelRefs.current.push(el);
    } 
  };

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    revelRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },{
          y: '-30%',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom, center',
            scrub: true,
          },
        }
      );
    });
  
    return () => {
      
    };
  }, []);

  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSwg/>
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRef={addToRef} title='January 🤝' subtext='We kicked off the year by enabling creators to verify their Twitter accounts on .NFT  for easier search and identification.' />
          <RoadMapItem addToRef={addToRef} title='February 🔥' subtext='As NFTs started to take off (a Beeple piece sold for $6.6 million at the time—it was a much bigger deal back then!), we raised a seed funding round led by CoinFund to get ready for rocket ship growth that soon followed.' />
          <RoadMapItem addToRef={addToRef} title='March 🦄' subtext='Moving towards the vision of a fluid, interoperable, diverse NFT market, we pre-released an early version of the Rarible Protocol for the NFT Hack hackathon.' />
          <RoadMapItem addToRef={addToRef} title='April ⏰' subtext='Timed auctions came out, allowing users to set up minimum bid and currency as well as starting and ending dates of the auction. You can see those ticking on our homepage.' />
          <RoadMapItem addToRef={addToRef} title='June 🚀' subtext='As one of the first major brands to enter the space, Twitter launched their “140 Collection” with .NFT as the marketplace of choice.' />
        </Items>
      </Container>
    </Section>
  );
}

export default Roadmap;