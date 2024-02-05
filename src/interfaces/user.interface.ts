
import { CompanyInterface } from './company.interface';
import { Rule } from './rule.interface';
import { SignInInterface } from './signin.interface';

export interface UserInterface extends Omit<SignInInterface, 'password'> {
    id?: number;
    name: string;
    url_image: string;
    company: CompanyInterface;
    rules: Rule[];
}
