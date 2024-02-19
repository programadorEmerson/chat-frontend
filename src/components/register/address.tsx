import React, { FC, Fragment, useEffect } from 'react';

import { FormikProps } from 'formik';

import { InputSelect, InputText } from '@/components/Inputs';

import useFormikChecks from '@/hooks/useFormikChecks';
import { useLocalizationContext } from '@/hooks/useLocalization';

import { CompanyRegister } from '@/interfaces/company.interface';

interface AddressForm {
  formik: FormikProps<CompanyRegister>;
  loading: boolean;
}

const AddressForm: FC<AddressForm> = ({ formik, loading }) => {
  const { cities, states, loadingLocalization, selectState } = useLocalizationContext();

  const { containsError, getValue } = useFormikChecks({ formik });

  useEffect(() => {
    if (states.length > 0) {
      selectState(states[0].key);
      formik.setFieldValue('address.state', states[0].key);
    }
  }, [states]);

  useEffect(() => {
    if (formik.values.address.state) {
      selectState(formik.values.address.state);
    }
  }, [formik.values.address.state]);

  return (
    <Fragment>
      <InputSelect
        formik={formik}
        name='address.state'
        placeholder='Estado'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        valuesList={states}
        width={21}
      />
      <InputSelect
        formik={formik}
        name='address.city'
        placeholder='Cidade'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        valuesList={cities}
        width={26.7}
      />
      <InputText
        formik={formik}
        name='address.address'
        placeholder='Endereço'
        type='text'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        width={35}
      />
    </Fragment>
  );
};

export default AddressForm;
