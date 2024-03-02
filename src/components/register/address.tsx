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

  const { values : { address : { state } } } = formik;

  useEffect(() => {
    if (cities.length > 0) formik.setFieldValue('address.city', cities[0].key);

    if (states.length > 0 && !state) {
      selectState(states[0].key);
      formik.setFieldValue('address.state', states[0].key);
    }
  }, [states, cities]);

  useEffect(() => selectState(state), [state]);

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
        width={30.7}
      />
      <InputText
        formik={formik}
        name='address.address'
        placeholder='Endereço'
        type='text'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        width={31}
      />
      <InputText
        formik={formik}
        name='address.number'
        placeholder='N.º'
        type='text'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        width={20}
      />
      <InputText
        formik={formik}
        name='address.district'
        placeholder='Bairro'
        type='text'
        disabled={loading || loadingLocalization}
        containsError={containsError}
        getValue={getValue}
        width={45}
      />
      <InputText
        formik={formik}
        name='address.complement'
        placeholder='Complemento'
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
