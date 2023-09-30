'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import { useFormik } from 'formik';

import ButtonSubmit from '@/components/buttons/buttonSubmit';
import Input from '@/components/Input';

import { ConstantsEnum } from '@/enums/constants.enum';

import { useUserContext } from '@/hooks/useUser';

import { initialValuesSignin } from '@/interfaces/signin.interface';

import schemaSignin from '@/schema/signin.schema';

const Login: NextPage = () => {

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
    <section className="container inline-flex flex-row h-screen w-full">
      <div className='flex-col w-1/2 hidden md:flex justify-center content-center'>
        <div className='flex flex-row h-1/4 md:h-2/4 justify-center items-center'>
          <Image src='/assets/people-signin.svg'
            className='w-4/6'
            alt='login'
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className='flex flex-col w-full md:w-1/2 justify-center content-center p-10'>
        <div className='flex flex-row h-1/4 md:h-2/4 justify-center items-center'>
          <Image src='/assets/sample.png'
            className='w-2/4 md:w-2/3'
            alt='login'
            width={500}
            height={500}
          />
        </div>
        <form onSubmit={formik.handleSubmit}
          className='md:px-6 flex flex-col flex-1 justify-center items-centerpx-10 gap-3'
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
      </div>

    </section>
  );
};

export default Login;
