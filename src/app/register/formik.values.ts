import * as yup from 'yup';

import { RegisterUserInterface } from '@/interfaces/user.interface';

import { TranslationKeys } from './types';

export const initialValues:RegisterUserInterface  = {
  name : '',
  url_image : '',
  email : '',
  rules : [],
  password : '',
  confirmPassword : '',
  company : {
    name : '',
    document : '',
    email : '',
    phone : '',
    address : '',
    city : '',
    state : '',
    zip_code : '',
    plan : '',
    company_top_up : {
      recharge : 0,
      recharge_payment_method : ''
    }
  }
};

export const validationSchema = ({ translations }: { translations: TranslationKeys }) => {
  const prohibitedValue = 'select';

  return yup.object<RegisterUserInterface>({
    name : yup.string().required(translations.name),
    password : yup.string().required(translations.password),
    company : yup.object({
      name : yup.string().required(translations.companyName),
      document : yup.string().required(translations.companyDocument),
      email : yup.string().email(translations.companyEmailInvalid).required(translations.companyEmail),
      phone : yup.string().required(translations.companyPhone),
      address : yup.string().required(translations.companyAdress),
      city : yup.string().required(translations.companyCity)
        .notOneOf([prohibitedValue], translations.companyCityInfor),
      state : yup.string().required(translations.companyState)
        .notOneOf([prohibitedValue], translations.companyStateInfor),
      zip_code : yup.string().required(translations.companyZipCode),
    }),
  });
};
