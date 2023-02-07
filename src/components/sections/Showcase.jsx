import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import {nftHooligan, nftSmircs} from '../../data';
import ETH from '../../assets/Ethereum.svg';

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &>*:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  &>*:last-child {
    animation-duration: 15s;
    
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
    0%{ transform: translateX(100%) }
    100%{ transform: translateX(-100%) }
`;

const Row = styled.section`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${props => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  background-color: ${props => props.theme.body};
  margin: 0 1rem;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.text};
  border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h2 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontsm};
    }
  }
`;

const Prise = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({link, title, number=0, price=0, passRef}) => {
  const play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };

  const pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };

  return (
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)} >
      <img src={link} alt={title} />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h2>#{number}</h2>
        </div>

        <div>
          <span>Prise</span>
          <Prise>
            <img src={ETH} alt='ETH' />
            <h2>{Number(price).toFixed(2)}</h2>
          </Prise>
        </div>
      </Details>
    </ImgContainer>
  );
};

function Showcase() {
  const RowRef1 = useRef(null);
  const RowRef2 = useRef(null);

  return (
    <Section id='showcase'>
      <Row direction='none' ref={RowRef1}>
        {
          nftHooligan.map(({link, title, price, number}, id) => {
            return (
              <NftItem 
                key={id} 
                link={link} 
                title={title} 
                price={price} 
                number={number}
                passRef={RowRef1}
              />
            ); 
          })
        }
      </Row>

      <Row direction='reverse' ref={RowRef2}>
        {
          nftSmircs.map(({link, title, price, number}, id) => {
            return (
              <NftItem 
                key={id} 
                link={link} 
                title={title} 
                price={price} 
                number={number}
                passRef={RowRef2}
              />
            ); 
          })
        }
      </Row>
    </Section>
  );
}

export default Showcase;