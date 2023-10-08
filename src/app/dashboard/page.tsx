'use client';

import { useEffect } from 'react';

import { NextPage } from 'next';

import { useUserContext } from '@/hooks/useUser';

const Dashboard: NextPage = () => {
  const { user } = useUserContext();

  useEffect(() => {
    console.log('User Dashboard: ', user);
  }, [user]);

  return (
    <div className='justify-center content-center'>
      <span>
        Dashboard
      </span>
    </div>
  );
};

export default Dashboard;
