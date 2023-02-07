import React from 'react';
import styled from 'styled-components';

import GIF from '../assets/Video.gif';

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 55vh;
  }
`;

function CoverVideo() {
  return (
    <VideoContainer>
      <img src={GIF} />
    </VideoContainer>
  );
}

export default CoverVideo;