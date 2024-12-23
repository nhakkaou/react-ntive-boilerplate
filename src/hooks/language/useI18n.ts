import i18next from 'i18next';

import { SupportedLanguages } from './schema';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart'
const changeLanguage = (lang: SupportedLanguages) => {
  i18next.changeLanguage(lang);
};

const toggleLanguage = () => {
  i18next.changeLanguage(
    i18next.language === SupportedLanguages.EN_EN
      ? SupportedLanguages.AR
      : SupportedLanguages.EN_EN,
  );
  if (i18next.language === SupportedLanguages.AR) I18nManager.forceRTL(true);
  else I18nManager.forceRTL(false)
  RNRestart.Restart();
};

export const useI18n = () => {
  return { changeLanguage, toggleLanguage };
};
