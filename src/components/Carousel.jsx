import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import {nftKong} from '../data';
import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${props => props.theme.caruselColor};
    border-radius 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-button-prev {
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    transform: rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-pagination {
    font-size: ${props => props.theme.fontxl};
    font-weight: 600;
  }

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
`;

function Carousel() {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        scrollbar={{
          draggable: true,
        }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        {
          nftKong.map(({link, title}, id) => {
            return (
              <SwiperSlide key={id}> 
                <img src={link} alt={title} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </Container>
  );
}

export default Carousel;