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

export interface Package {
  id: string;
  name: string;
  description: string;
  url_image: string;
  price: number;
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
  packages: Package[];
}

export interface UserRegister extends Omit<User, 'rules' | 'id' | 'company' | 'url_image'> {
  password: string;
  confirmPassword: string;
  fileImg: File | null;
}

export interface Company extends Omit<CompanyRegister, 'user'> { }
