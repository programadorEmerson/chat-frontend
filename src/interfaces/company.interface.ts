import { User } from './user.interface';

export interface PlanInformation {
  plan: string;
  last_recharge: number;
  remaining_balance: number;
  recharge_payment_method: string;
}

export interface Address {
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export interface General {
  name : string,
  document : string,
  email : string,
  phone: string,
}

export interface CompanyRegister {
  address: Address,
  user: UserRegister;
  company: General;
  plan_information: PlanInformation;
}

export interface UserRegister extends Omit<User, 'rules' | 'id' | 'company'> {
  password: string;
  confirmPassword: string;
}

export interface Company extends Omit<CompanyRegister, 'user'> { }
