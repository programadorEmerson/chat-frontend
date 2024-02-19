'use client';

import { createContext, FC, memo, ReactNode, useEffect, useMemo, useState } from 'react';

import { getAllStates, getCitiesFromState, TypeValuesSelect } from '@/services/locations';

export type LocalizationContextProps = {
  states: TypeValuesSelect[],
  cities: TypeValuesSelect[],
  loadingLocalization: boolean,
  selectState: (state: string) => void
};

const LocalizationContext = createContext({} as LocalizationContextProps);

const LocalizationProvider: FC<{ children: ReactNode }> = memo(({ children }) => {
  const [states, setStates] = useState<TypeValuesSelect[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [cities, setCities] = useState<TypeValuesSelect[]>([]);
  const [loadingLocalization, setLoadingLocalization] = useState<boolean>(false);

  const selectState = (state: string) => setSelectedState(state);

  const searchCitiesByState = async (state: string) => {
    try {
      setLoadingLocalization(true);
      const allCities = await getCitiesFromState(state);
      setCities(allCities);
    } catch (error) {
      setCities([]);
    } finally {
      setLoadingLocalization(false);
    }
  };

  useEffect(() => {
    const getStates = async () => {
      try {
        setLoadingLocalization(true);
        const allStates: TypeValuesSelect[] = await getAllStates();
        setStates(allStates);
      } catch (error) {
        setStates([]);
      } finally {
        setLoadingLocalization(false);
      }
    };

    getStates();
  }, []);

  useEffect(() => {
    if (selectedState) searchCitiesByState(selectedState);
  }, [selectedState]);

  const valuesContext = useMemo(() => ({
    states, cities, loadingLocalization, selectState
  }), [states, cities, loadingLocalization, selectState]);

  return(
    <LocalizationContext.Provider value={valuesContext}>
      {children}
    </LocalizationContext.Provider>
  );
});

LocalizationProvider.displayName = 'LocalizationProvider';

export { LocalizationContext, LocalizationProvider };
