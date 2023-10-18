import { useEffect, useState } from 'react';

import { Rule } from '@/interfaces/rule.interface';

import { useAbilities } from './useAbilities';
import { useUserContext } from './useUser';

const useCheckAbilities = ({ action, subject }: Rule): {authorized: boolean | null} => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  const { abilities : ability } = useAbilities();
  const { user } = useUserContext();

  const check = () => () => ability.can(action, subject);

  useEffect(() => {
    if (user) setAuthorized(check());
  }, [user, subject, action]);

  return { authorized };
};

export default useCheckAbilities;
