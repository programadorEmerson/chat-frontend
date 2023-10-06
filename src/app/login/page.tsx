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
      <section className="container flex justify-center content-center">
        <div className='w-8/12 hidden justify-center content-center
          xl:w-8/12 lg:w-7/12 md:w-6/12 xl:flex lg:flex md:flex
        '
        >
          <Image src={ImagesEnum.PEOPLE_LOGIN}
            className='object-contain w-full p-10 md:p-5'
            alt='login'
            width={500}
            height={500}
            priority
          />
        </div>

        <div className='w-full flex flex-col justify-center content-center
          lg:w-5/12 md:w-6/12 sm:w-full gap-8
        '
        >
          <div className='flex justify-center content-center'>
            <Image
              src={ImagesEnum.LOGO}
              className='w-5/12 mb-6'
              alt='login'
              width={500}
              height={500}
            />
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className='px-5 flex flex-col justify-center items-center content-center gap-3'
          >
            <Input.Text
              formik={formik}
              type={ConstantsEnum.TEXT}
              id={ConstantsEnum.EMAIL}
              reference={ConstantsEnum.EMAIL}
              placeholder={ConstantsEnum.PLACEHOLDER_EMAIL}
            />
            <Input.Text
              formik={formik}
              type={ConstantsEnum.PASSWORD}
              id={ConstantsEnum.PASSWORD}
              reference={ConstantsEnum.PASSWORD}
              placeholder={ConstantsEnum.PLACEHOLDER_PASSWORD}
            />
            <ButtonSubmit
              id="signin-button"
              formik={formik}
            >
              Enviar
            </ButtonSubmit>
          </form>
          <div className='flex flex-col justify-center items-center content-center'>
            <span>
              Xablau
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
