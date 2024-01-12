'use client';

import React, { type FC, createContext, type ReactNode, memo } from 'react';

import { type AnyAbility } from '@casl/ability';
import { createContextualCan } from '@casl/react';

import { useAbilities } from '@/hooks/useAbilities';

const AbilityContext = createContext<AnyAbility>({} as AnyAbility);
const Can = createContextualCan(AbilityContext.Consumer);

const AbilityProvider: FC<{ children: ReactNode }> = memo(({ children }) => {
  const { abilities } = useAbilities();

  return (
    <AbilityContext.Provider value={abilities}>
      {children}
    </AbilityContext.Provider>
  );
});
AbilityProvider.displayName = 'AbilityProvider';

export { AbilityContext, Can, AbilityProvider };
