'use client';

import { FC } from 'react';

import Image from 'next/image';

import { ActionEnum } from '@/enums/featureCode.enum';
import { ImagesEnum } from '@/enums/images.enum';

import useCheckAbilities, { UseCheckAbilities } from '@/hooks/useCheckAbilities';

interface GuardRouteProps extends Omit<UseCheckAbilities, 'action'> {
  children: React.ReactNode;
}

const GuardRoute:FC<GuardRouteProps> = ({ subject, children }) => {
  const { authorized } = useCheckAbilities({ action : ActionEnum.READ, subject });

  if ( authorized === null ) {
    return (
      <div role="status"
        className='w-full h-full flex items-center justify-center'
      >
        <Image src={ImagesEnum.LOADING}
          className='object-contain w-52 p-10 md:p-5'
          alt='login'
          width={500}
          height={500}
          priority
        />
      </div>
    );
  }

  return (
    <>
      { authorized
        ? (
          <div>
            { children }
          </div>
        )
        : (
          <div>
            You are not authorized to view this page
          </div>
        )
      }
    </>
  );
};

export default GuardRoute;
