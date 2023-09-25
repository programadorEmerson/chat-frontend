'use client';

import { useFormik } from 'formik';

import ButtonSubmit from '@/components/buttons/buttonSubmit';
import Input from '@/components/Input';

import { ConstantsEnum } from '@/enums/constants.enum';

import { useUserContext } from '@/hooks/useUser';

import { initialValuesSignin } from '@/interfaces/signin.interface';

import schemaSignin from '@/schema/signin.schema';

export default function Home() {
  const { signIn } = useUserContext();

  const formik = useFormik({
    enableReinitialize : true,
    validationSchema : schemaSignin,
    initialValues : initialValuesSignin,
    onSubmit : async (values) => {
      await signIn(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}
      className='flex min-h-screen flex-col items-center justify-between p-24'
    >
      <Input.Text formik={formik}
        type={ConstantsEnum.TEXT}
        reference={ConstantsEnum.EMAIL}
        placeholder={ConstantsEnum.PLACEHOLDER_EMAIL}
      />
      <Input.Text formik={formik}
        type={ConstantsEnum.PASSWORD}
        reference={ConstantsEnum.PASSWORD}
        placeholder={ConstantsEnum.PLACEHOLDER_PASSWORD}
      />
      <ButtonSubmit formik={formik}>
        Enviar
      </ButtonSubmit>
    </form>
  );
}
