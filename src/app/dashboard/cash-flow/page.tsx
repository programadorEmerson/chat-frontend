import React from 'react';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectConstants } from '@/constants/subject.constants';

const CashFlow: NextPage = () => {
  return (
    <GuardRoute subject={SubjectConstants.CASH_FLOW}>
      <div>CashFlow</div>
    </GuardRoute>
  );
};

export default CashFlow;
