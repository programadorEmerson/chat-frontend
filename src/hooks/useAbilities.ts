import { useContext, useCallback, useEffect, useState } from 'react';

import {
  type AnyAbility,
  PureAbility,
  type Subject,
  type MongoQuery,
  type SubjectRawRule,
  type ExtractSubjectType
} from '@casl/ability';

import { AbilityContext } from '@/contexts/ability.context';

import { useUserContext } from './useUser';

type MongoQueryType = Record<string, unknown>

type SubjectRawRuleType = SubjectRawRule<
string,
ExtractSubjectType<Subject>,
MongoQuery<MongoQueryType>
>

export type AbilitiesProps = SubjectRawRuleType[] | undefined

export interface CaslAbilitiesProps { abilities: PureAbility }

export const useAbilitiesContext = (): AnyAbility => useContext(AbilityContext);

export const useAbilities = (): CaslAbilitiesProps => {
  const [abilities, setAbilities] = useState(new PureAbility());

  const { user } = useUserContext();

  const updateAbilities = useCallback((rules: AbilitiesProps) => {
    const newAbilities = new PureAbility(rules);
    setAbilities(newAbilities);
  }, [setAbilities]);

  useEffect(() => {
    if (user) updateAbilities(user.rules);
  }, [updateAbilities, user]);

  return { abilities };
};
