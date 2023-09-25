import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

import de_DE from './translations/de_DE.json';
import en_GB from './translations/en_GB.json';
import hu_HU from './translations/hu_HU.json';
import ro_RO from './translations/ro_RO.json';
import sk_SK from './translations/sk_SK.json';

const locale = getLocales()?.[0] ? getLocales()[0].languageCode : 'en';

const translations = {
    de: de_DE,
    en: en_GB,
    hu: hu_HU,
    ro: ro_RO,
    sk: sk_SK,
};

const i18n = new I18n(translations);

i18n.enableFallback = true;
i18n.defaultLocale = 'en';
i18n.locale = locale;

export default i18n;
