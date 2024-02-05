import { SignInInterface } from './signin.interface';

interface CompanyTopUp {
  recharge: number;
  recharge_payment_method: string;
}

export interface CompanyInterface extends Omit<SignInInterface, 'password'> {
  name: string;
  document: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  plan: string;
  company_top_up: CompanyTopUp;
}
