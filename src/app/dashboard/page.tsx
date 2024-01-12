'use client';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectConstants } from '@/constants/subject.constants';

const Dashboard: NextPage = () => {

  return (
    <div className='justify-center content-center'>
      <GuardRoute subject={SubjectConstants.DASHBOARD}>
        <div>Dashboard 1</div>
      </GuardRoute>
    </div>
  );
};

export default Dashboard;
