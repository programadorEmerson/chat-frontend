import { useContext } from 'react';

import { UserContext, UserContextProps } from '@/contexts/user.context';

export const useUserContext = (): UserContextProps => useContext(UserContext);
