
import { CompanyInterface } from './company.interface';
import { Rule } from './rule.interface';
import { SignInInterface } from './signin.interface';

export interface UserInterface extends Omit<SignInInterface, 'password'> {
    id?: number;
    name: string;
    url_image: string;
    email: string;
    rules: Rule[];
    company: CompanyInterface;
}

export interface RegisterUserInterface extends Omit<UserInterface, 'id'> {
    password: string;
    confirmPassword: string;
}
