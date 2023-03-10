import React, { useRef, useLayoutEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Vector from '../Icons/Vector';

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48em) {
    left: 1.5rem;
  }
`;

const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
`;

const Ball = styled.div`
  position: absolute;
  top: 0rem;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1.5rem;
  }
`;

function DrawSwg() {
  const ref = useRef(null);
  const ballref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
  useLayoutEffect(() => {
    const element = ref.current;
    const svg = document.getElementsByClassName('svg-path')[0];
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length -  draw;
        },
        onToggle: self => {
          if (self.isActive) {
            ballref.current.style.display = 'none';
          } else {
            ballref.current.style.display = 'block';
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);


  return (
    <>  
      <Ball ref={ballref}/>
      <VectorContainer ref={ref}>
        <Vector/>
      </VectorContainer>
    </>
  );
}

export default DrawSwg;