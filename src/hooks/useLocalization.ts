import { useContext } from 'react';

import { LocalizationContext, LocalizationContextProps } from '@/contexts/localization.context';

export const useLocalizationContext = (): LocalizationContextProps => useContext(LocalizationContext);
