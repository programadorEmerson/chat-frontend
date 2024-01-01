'use client';

import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import Image from 'next/image';

import { StyledContainerLimit } from '@/styles/shared';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Carrossel = () => {
  return (
    <StyledContainerLimit className='w-full justify-center content-center absolute'>
      <CarouselProvider
        naturalSlideWidth={1440}
        naturalSlideHeight={500}
        totalSlides={3}
        infinite={true}
        interval={5000}
        isPlaying={true}
        className='relative w-full h-full'
      >
        <Slider>
          <Slide index={0}>
            <Image alt=''
              src="/assets/teste1.png"
              width={1440}
              height={600}
              className='w-full h-full object-fill object-center'
            />
          </Slide>
          <Slide index={1}>
            <Image alt=''
              src="/assets/teste2.jpg"
              width={1440}
              height={600}
              className='w-full h-full object-fill object-center'
            />
          </Slide>
          <Slide index={2}>
            <Image alt=''
              src="/assets/teste3.jpg"
              width={1440}
              height={600}
              className='w-full h-full object-fill object-center'
            />
          </Slide>
        </Slider>
        <ButtonBack className='ml-4 absolute top-1/2 left-0 transform -translate-y-1/2 '>
          <FaArrowCircleLeft className='text-slate-200 opacity-65 shadow-md hover:opacity-100 transition-all'
            size={40}
          />
        </ButtonBack>
        <ButtonNext className='mr-4 absolute top-1/2 right-0 transform -translate-y-1/2'>
          <FaArrowCircleRight className='text-slate-200 opacity-65 shadow-md hover:opacity-100 transition-all'
            size={40}
          />
        </ButtonNext>
      </CarouselProvider>
    </StyledContainerLimit>
  );
};

export default Carrossel;
