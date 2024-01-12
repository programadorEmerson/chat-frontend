import React from 'react';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectConstants } from '@/constants/subject.constants';

const Providers: NextPage = () => {
  return (
    <GuardRoute subject={SubjectConstants.PROVIDERS}>
      <div>Providers</div>
    </GuardRoute>
  );
};

export default Providers;
