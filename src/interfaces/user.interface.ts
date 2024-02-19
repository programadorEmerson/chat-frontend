
import { Company } from './company.interface';
import { Rule } from './rule.interface';
import { SignInInterface } from './signin.interface';

export interface User extends Omit<SignInInterface, 'password'> {
    id: number;
    name: string;
    url_image: string;
    email: string;
    rules: Rule[];
    company: Company;
}

export interface RegisterUserInterface extends Omit<User, 'id'> {
    password: string;
    confirmPassword: string;
}
