import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Logotype = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Akaya Telivigala', cursive;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1)
  }

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
`

function Logo() {
  return (       
    <Logotype>
      <Link to='/' >
          .NFT
      </Link> 
    </Logotype>
  )
}

export default Logo;