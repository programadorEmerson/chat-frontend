'use client';

import React from 'react';

import Carrossel from '@/components/LandingPage/Carrossel';

import whereAmI from '@/hooks/useImIn';

const Home = () => {

  const { inCurrentPage } = whereAmI({ reference : '/' });

  return (
    <section className={`${inCurrentPage ? 'pl-0' : 'pl-16'} flex flex-col mt-14 w-full min-h-[calc(100vh-3.5rem)]`}>
      <Carrossel />
      <div className='h-screen bg-slate-200'
        id="about"
      >
        About
      </div>
      <div className='h-screen bg-green-200'
        id="price"
      >
        Price
      </div>
      <div className='h-screen bg-yellow-200'
        id="contact"
      >
        contact
      </div>
    </section>
  );
};

export default Home;
