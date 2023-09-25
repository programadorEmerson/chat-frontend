import { SignInInterface } from './signin.interface';

export interface UserInterface extends Omit<SignInInterface, 'password'> {
    id: number;
    name: string;
    active: boolean;
}
