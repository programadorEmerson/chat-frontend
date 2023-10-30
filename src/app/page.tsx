'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { RoutesEnum } from '@/enums/routes';

const Home = () => {
  const navgate = useRouter();

  return (
    <div>
      <button onClick={() => navgate.push(RoutesEnum.DASHBOARD)}
        type="button"
      >
        Dashboard
      </button>
    </div>
  );
};

export default Home;
