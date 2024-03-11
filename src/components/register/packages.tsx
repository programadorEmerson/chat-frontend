import React from 'react';

import { FormikProps } from 'formik';

import { CompanyRegister } from '@/interfaces/company.interface';

import Package from '@/app/register/package';

import { StyledContainerPackage, StyledContentPackage } from './styles.register';

interface DefinePackagesProps<T extends CompanyRegister> {
    formik: FormikProps<T>;
    loading: boolean;
}

const fakePackage: Package = {
  'id' : '1234',
  'name' : 'Produtos',
  'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'url_image' : 'https://static.vecteezy.com/system/resources/thumbnails/028/047/017/small/3d-check-product-free-png.png',
  'price' : 0
};

const ArrayFromPackages = Array.from({ length : 9 }, (_, index) => ({
  ...fakePackage,
  id : index.toString()
}));

const DefinePackages = <T extends CompanyRegister>({ formik }: DefinePackagesProps<T>): JSX.Element => {
  return (
    <StyledContainerPackage>
      <StyledContentPackage>
        {ArrayFromPackages.map((item, index) => (
          <Package
            key={index}
            formik={formik}
            packageItem={item} />
        ))}
      </StyledContentPackage>
    </StyledContainerPackage>
  );
};

export default DefinePackages;
