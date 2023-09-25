import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import de_DE from './translations/de_DE.json';
import en_GB from './translations/en_GB.json';
import hu_HU from './translations/hu_HU.json';
import ro_RO from './translations/ro_RO.json';
import sk_SK from './translations/sk_SK.json';

const locale = getLocales()[0].languageCode;
const translations = {
    en: en_GB,
    de: de_DE,
    hu: hu_HU,
    sk: sk_SK,
    ro: ro_RO,
};

const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.defaultLocale = 'en';
i18n.locale = locale;

export default i18n;
