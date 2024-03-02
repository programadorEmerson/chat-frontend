import * as yup from 'yup';

import { Address, CompanyRegister, General, PlanInformation, UserRegister } from '@/interfaces/company.interface';

import cnpjValidator from '@/utils/cnpjValidator';
import cpfValidator from '@/utils/cpfValidator';

export type validator = 'address' | 'user' | 'company';

export const initialValuesUser: UserRegister = {
  name : '',
  url_image : '',
  email : '',
  password : '',
  confirmPassword : '',
};

export const initialValuesAddress: Address = {
  address : '',
  number : '',
  complement : '',
  district : '',
  city : '',
  state : '',
};

export const initialValuesCompany: General = {
  name : '',
  document : '',
  email : '',
  phone : '',
};

export const initialValuesPlanInformation: PlanInformation = {
  plan : '',
  last_recharge : 0,
  remaining_balance : 0,
  recharge_payment_method : '',
};

export const initialValues: CompanyRegister = {
  user : initialValuesUser,
  company : initialValuesCompany,
  address : initialValuesAddress,
  plan_information : initialValuesPlanInformation,
};

const verifyDocument = (ctx: yup.TestContext<yup.AnyObject>, value: string) => {
  const { createError } = ctx;
  const valueSize = value.length;

  if (value) {
    if (valueSize <= 14 && !cpfValidator(value)) return createError({ message : 'Cpf inválido.' });
    if (valueSize > 14 && !cnpjValidator(value)) return createError({ message : 'Cnpj inválido.' });
  }
  return true;
};

export const validationCompanySchma = yup.object<Partial<CompanyRegister>>({
  // company : yup.object<General>({
  //   name : yup.string().required('Nome é obrigatório'),
  //   document : yup
  //     .string()
  //     .required('CPF ou CNPJ é obrigatório')
  //     .test({ name : 'document', test : (value, ctx) => verifyDocument(ctx, value) }),
  //   email : yup.string().email('Email inválido').required('Email é obrigatório'),
  //   phone : yup.string().required('Telefone é obrigatório'),
  // }),
  // address : yup.object<Address>({
  //   address : yup.string().required('Endereço é obrigatório'),
  //   number : yup.string().required('O número é obrigatório'),
  //   district : yup.string().required('Bairro é obrigatório'),
  //   city : yup.string().required('Cidade é obrigatório'),
  //   state : yup.string().required('Estado é obrigatório'),
  // }),
});

export const validationUserSchema = yup.object<CompanyRegister>({
  // user : yup.object<UserRegister>({
  //   name : yup.string().required('Nome é obrigatório'),
  //   email : yup.string().email('Email inválido').required('Email é obrigatório'),
  //   password : yup.string().required('Senha é obrigatória'),
  //   confirmPassword : yup.string().required('Confirmação de senha é obrigatória')
  //     .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  // }),
});

export function getValidationSchema(step: number) {
  switch(step) {
  case 1:
    return validationCompanySchma;
  case 2:
    return validationUserSchema;
  default:
    return yup.object({});
  }
}
