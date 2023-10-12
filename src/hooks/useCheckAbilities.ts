
import { useEffect, useState } from 'react';

import { ActionEnum, SubjectEnum } from '@/enums/featureCode.enum';

import { useAbilities } from './useAbilities';
import { useUserContext } from './useUser';

export type UseCheckAbilities = {
  subject: SubjectEnum;
  action: ActionEnum;
};

const useCheckAbilities = ({ action, subject }: UseCheckAbilities): {authorized: boolean | null} => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  const { abilities : ability } = useAbilities();
  const { user } = useUserContext();

  const check = () => () => ability.can(action, subject);

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setAuthorized(check());
      }, 10000);
    }
  }, [user]);

  return { authorized };
};

export default useCheckAbilities;
