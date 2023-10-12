'use client';

import React from 'react';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectEnum } from '@/enums/featureCode.enum';

const Clients: NextPage = () => {
  return (
    <GuardRoute subject={SubjectEnum.CLIENTS}>
      <div>
        Clients
      </div>
    </GuardRoute>
  );
};

export default Clients;
