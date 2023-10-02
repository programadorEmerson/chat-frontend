'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import ButtonSubmit from '@/components/buttons/buttonSubmit';
import Input from '@/components/Input';

import { ConstantsEnum } from '@/enums/constants.enum';
import { ImagesEnum } from '@/enums/images.enum';

import { useUserContext } from '@/hooks/useUser';

const Login: NextPage = () => {

  const { formik } = useUserContext();

  return (
    <div className='flex w-full h-screen justify-center content-center'>
      <section className="container flex flex-row ">
        <div className='flex-col w-1/2 hidden md:flex justify-center content-center'>
          <div className='flex flex-row h-1/4 md:h-2/4 justify-center items-center'>
            <Image src={ImagesEnum.PEOPLE_LOGIN}
              alt='login'
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className='flex flex-col w-full md:w-1/2 justify-center content-center p-10'>
          <div className='flex flex-row h-1/4 md:h-3/6 justify-center items-center'>
            <Image src={ImagesEnum.LOGO}
              className='w-2/4 md:w-1/3'
              alt='login'
              width={500}
              height={500}
            />
          </div>
          <form onSubmit={formik.handleSubmit}
            className='md:px-20 flex flex-col flex-1 justify-center items-centerpx-10 gap-3 '
          >
            <Input.Text formik={formik}
              type={ConstantsEnum.TEXT}
              id={ConstantsEnum.EMAIL}
              reference={ConstantsEnum.EMAIL}
              placeholder={ConstantsEnum.PLACEHOLDER_EMAIL}
            />
            <Input.Text formik={formik}
              type={ConstantsEnum.PASSWORD}
              id={ConstantsEnum.PASSWORD}
              reference={ConstantsEnum.PASSWORD}
              placeholder={ConstantsEnum.PLACEHOLDER_PASSWORD}
            />
            <ButtonSubmit formik={formik}>
              Enviar
            </ButtonSubmit>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
