import React from 'react';

import { NextPage } from 'next';

import GuardRoute from '@/components/guardRoute';

import { SubjectConstants } from '@/constants/subject.constants';

const Products: NextPage = () => {
  return (
    <GuardRoute subject={SubjectConstants.PRODUCTS}>
      <div>Products</div>
    </GuardRoute>
  );
};

export default Products;
