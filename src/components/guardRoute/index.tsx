'use client';

import { FC, ReactNode, memo, useEffect, useState } from 'react';

import useCheckAbilities from '@/hooks/useCheckAbilities';

import { Rule } from '@/interfaces/rule.interface';

import { ActionConstants } from '@/constants/action.constants';

import NotAuthorized from '../notAuthorized';
import Loading from './Loading';
import { Styled } from './styles.guard-routes';

interface GuardRouteProps extends Omit<Rule, 'action'> {
  children: ReactNode;
}

// Constant for the delay before showing the NotAuthorized component
const NOT_AUTHORIZED_DELAY = 500;

/**
 * GuardRoute - A Higher Order Component (HOC) responsible for guarding routes.
 *
 * @component
 * @example
 *   return (
 *     <GuardRoute subject="someSubject">
 *       <YourComponent />
 *     </GuardRoute>
 *   )
 */
const GuardRoute: FC<GuardRouteProps> = ({ subject, children }) => {
  const [viewNotAuthorized, setViewNotAuthorized] = useState(false);
  const { authorized } = useCheckAbilities({ action : ActionConstants.READ, subject });

  // Simplified not authorized check
  const notAuthorized = authorized === false;

  useEffect(() => {
    let isMounted = true;

    if (!viewNotAuthorized && notAuthorized) {
      const timer = setTimeout(() => {
        if (isMounted) {
          setViewNotAuthorized(true);
        }
      }, NOT_AUTHORIZED_DELAY);

      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }

    setViewNotAuthorized(false);
  }, [notAuthorized]);

  if (authorized === null) {
    return <Styled.ContainerLoading>
      <Loading />
    </Styled.ContainerLoading>;
  }

  if (authorized) {
    return <Styled.AuthorizedContainer>
      {children}
    </Styled.AuthorizedContainer>;
  }

  return (
    <Styled.UnauthorizedContainer>
      {viewNotAuthorized && <NotAuthorized />}
    </Styled.UnauthorizedContainer>
  );
};

export default memo(GuardRoute);
