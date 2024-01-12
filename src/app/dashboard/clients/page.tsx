'use client';

import React from 'react';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectConstants } from '@/constants/subject.constants';

const Clients: NextPage = () => {
  return (
    <GuardRoute subject={SubjectConstants.CLIENTS}>
      <div>
        Clients
      </div>
    </GuardRoute>
  );
};

export default Clients;
