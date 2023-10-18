'use client';

import { FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { ImagesEnum } from '@/enums/images.enum';

import useCheckAbilities from '@/hooks/useCheckAbilities';

import { Rule } from '@/interfaces/rule.interface';

import { ActionConstants } from '@/constants/action.constants';

import NotAuthorized from '../notAuthorized';

interface GuardRouteProps extends Omit<Rule, 'action'> {
  children: React.ReactNode;
}

const GuardRoute: FC<GuardRouteProps> = ({ subject, children }) => {
  const [viewNotAuthorized, setViewNotAuthorized] = useState(false);

  const { authorized } = useCheckAbilities({ action : ActionConstants.READ, subject });

  const notAuthorized = typeof authorized === 'boolean' && authorized === false;

  useEffect(() => {
    if (!viewNotAuthorized && !authorized) {
      setTimeout(() => setViewNotAuthorized(true), 500);
      return;
    }
    setViewNotAuthorized(false);

  }, [notAuthorized]);

  if (authorized === null) {
    return (
      <div role="status"
        className='w-full h-full flex items-center justify-center'
      >
        <Image
          src={ImagesEnum.LOADING}
          className='object-contain w-52 p-10 md:p-5'
          alt='login'
          width={500}
          height={500}
          priority
        />
      </div>
    );
  }

  if (authorized) {
    return (
      <div className='flex h-full w-full justify-center content-center'>
        {children}
      </div>
    );
  }

  return (
    <div className='flex h-full w-full justify-center content-center'>
      {viewNotAuthorized && (<NotAuthorized />)}
    </div>
  );
};

export default GuardRoute;
