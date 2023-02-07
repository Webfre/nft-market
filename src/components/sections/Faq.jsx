import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Accordion from '../Accordion';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }
`; 

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child {
      &>*:first-child {
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

function Faq() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
  useLayoutEffect(() => {
    const element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    });
  
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section id='faq' ref={ref}>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title='What is the long-term vision for NFT.Storage?'>
            Though we believe that there will always be value in some form of the libraries and services NFT.Storage provides, in the long-term the goal is to increasingly decentralize NFT.Storage.
          </Accordion>
          <Accordion title='How long will data be stored on NFT.Storage?'>
            Data will be available in IPFS indefinitely as well as stored in long-term, redundant Filecoin storage deals with the global community of miners. See the Terms of Service for details.
          </Accordion>
          <Accordion title='What are the upload or file size restrictions on NFT.Storage?'>
            NFT.Storage accepts storage requests up to 31GiB in size per individual upload! Each upload can include a single file or a directory of files. (If you are using the HTTP API, you'll need to do some manual splitting for files over 100MB.
          </Accordion>
          <Accordion title='Where can I learn more about NFT best practices?'>
            Visit NFT School for information on NFT best practices as well as a variety of helpful tutorials and how-to guides for NFT developers.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='How is NFT.Storage free to use?'>
            Filecoin storage providers commit their hard drive capacity to the Filecoin network, and earn significant block rewards for doing so. This translates into real-world profits for storage providers, which incentivizes them to continue committing additional hard disk space to the Filecoin network.
          </Accordion>
          <Accordion title='Is there a limit on numbers of files in a directory?'>
            There are no limits enforced by the service, other than the size limit of 31GiB per individual upload. 
          </Accordion>
          <Accordion title='Why am I seeing: Cannot use import statement outside a module'>
            Try updating to Node version 14 or later. This error can occur because of having an old version of Node.
          </Accordion>
          <Accordion title='Skypack issues or Webpack 4 not bundling?'>
            If you are unable to change your build tooling, you can import a pre-bundled version of the NFT.Storage library by changing your import statment. Please see the troubleshooting entry for an example.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
}

export default Faq;