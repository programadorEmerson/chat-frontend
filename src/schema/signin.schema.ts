import * as yup from 'yup';

import { SignInInterface } from '@/interfaces/signin.interface';

const schemaSignin = yup.object<SignInInterface>({
  email : yup.string().email('Informe um email válido').required('Informe um email'),
  password : yup.string().required('Informe uma senha'),
});

export default schemaSignin;
