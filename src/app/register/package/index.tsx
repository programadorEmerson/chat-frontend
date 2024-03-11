import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

import { FormikProps } from 'formik';

import { CompanyRegister, Package } from '@/interfaces/company.interface';

import {
  StyledContainerPackage,
  StyledHr, StyledImagePackage, StyledSelectPackage, StyledTitlePackage
} from './styles.package';

interface PackageProps<T extends CompanyRegister> {
    formik: FormikProps<T>;
    packageItem: Package;
}

const Package = <T extends CompanyRegister>({ formik, packageItem }: PackageProps<T>): JSX.Element => {

  const selected = formik.values.packages.some((item: Package) => item.id === packageItem.id);

  const handleTooglePackage = () => {
    if (selected) {
      formik.setFieldValue('packages', formik.values.packages.filter((item: Package) => item.id !== packageItem.id));
    } else {
      formik.setFieldValue('packages', [...formik.values.packages, packageItem]);
    }
  };

  return (
    <StyledContainerPackage>

      <StyledTitlePackage>
        {packageItem.name}
      </StyledTitlePackage>

      <StyledHr />

      <StyledImagePackage
        src={packageItem.url_image}
        alt={packageItem.name} />

      <StyledSelectPackage
        $selected={selected}
        onClick={handleTooglePackage}
        type="button">
        {selected ? 'Selecionado' : 'Selecionar'}
        {selected && <GiCheckMark style={{ marginLeft : '0.5rem' }} />}
      </StyledSelectPackage>

    </StyledContainerPackage>
  );
};

export default Package;
