import { DeviceFeatures } from '../base/DeviceFeatures';
import I18n from 'i18n-js';
import en from './dictionaries/en-US';
import pt from './dictionaries/pt-BR';
import { EnumLanguages } from './EnumLanguages';
import { ILanguageStructure } from './ILanguageStructure';

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

export const setLanguageToI18n = (
  language?: EnumLanguages.EN_US | EnumLanguages.PT_BR,
) => {
  const translateNormalize = language || DeviceFeatures.getLanguageByDevice();

  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);

  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = EnumLanguages.EN_US);
};

export const translate = (key: keyof ILanguageStructure) =>
  I18n.t(key as string);
