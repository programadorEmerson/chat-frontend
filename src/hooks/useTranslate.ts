import { useContext } from 'react';

import { TranslateContext, TranslateContextProps } from '@/contexts/translate.context';

export const useTranslateContext = (): TranslateContextProps => useContext(TranslateContext);
