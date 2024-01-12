'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

import Carrossel from '@/components/LandingPage/Carrossel';

const Home = () => {
  const currentPath = usePathname();

  const isLandingPage = currentPath === '/';

  return (
    <section className={`${isLandingPage ? 'pl-0' : 'pl-16'} mt-14 w-full min-h-[calc(100vh-3.5rem)]`}>
      <Carrossel />
    </section>
  );
};

export default Home;
