import * as yup from 'yup';

import { UserInterface } from '@/interfaces/user.interface';

import { TranslationKeys } from '@/translations/types';

export const initialValues:UserInterface  = {
  name : '',
  url_image : '',
  email : '',
  rules : [],
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

export const validationSchema = ({ translations }: {translations: TranslationKeys} ) => {

  return yup.object<UserInterface>({
    name : yup.string().required(translations.nameError),
  });
};
