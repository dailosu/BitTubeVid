"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCALE_FILES = ['player', 'server'];
exports.I18N_LOCALES = {
    'en-US': 'English',
    'fr-FR': 'Français',
    'ja-JP': '日本語',
    'eu-ES': 'Euskara',
    'ca-ES': 'Català',
    'cs-CZ': 'Čeština',
    'eo': 'Esperanto',
    'el-GR': 'ελληνικά',
    'de-DE': 'Deutsch',
    'it-IT': 'Italiano',
    'nl-NL': 'Nederlands',
    'es-ES': 'Español',
    'oc': 'Occitan',
    'gd': 'Gàidhlig',
    'zh-Hant-TW': '繁體中文（台灣）',
    'pt-BR': 'Português (Brasil)',
    'pt-PT': 'Português (Portugal)',
    'sv-SE': 'svenska',
    'pl-PL': 'Polski',
    'fi-FI': 'suomi',
    'ru-RU': 'русский',
    'zh-Hans-CN': '简体中文（中国）'
};
const I18N_LOCALE_ALIAS = {
    'en': 'en-US',
    'fr': 'fr-FR',
    'eu': 'eu-ES',
    'ca': 'ca-ES',
    'cs': 'cs-CZ',
    'de': 'de-DE',
    'es': 'es-ES',
    'pt': 'pt-PT',
    'fi': 'fi-FI',
    'sv': 'sv-SE',
    'pl': 'pl-PL',
    'ru': 'ru-RU',
    'nl': 'nl-NL',
    'zh': 'zh-Hans-CN',
    'zh-CN': 'zh-Hans-CN',
    'zh-TW': 'zh-Hant-TW'
};
exports.POSSIBLE_LOCALES = Object.keys(exports.I18N_LOCALES)
    .concat(Object.keys(I18N_LOCALE_ALIAS));
function getDefaultLocale() {
    return 'en-US';
}
exports.getDefaultLocale = getDefaultLocale;
function isDefaultLocale(locale) {
    return getCompleteLocale(locale) === getCompleteLocale(getDefaultLocale());
}
exports.isDefaultLocale = isDefaultLocale;
function peertubeTranslate(str, translations) {
    return translations && translations[str] ? translations[str] : str;
}
exports.peertubeTranslate = peertubeTranslate;
const possiblePaths = exports.POSSIBLE_LOCALES.map(l => '/' + l);
function is18nPath(path) {
    return possiblePaths.indexOf(path) !== -1;
}
exports.is18nPath = is18nPath;
function is18nLocale(locale) {
    return exports.POSSIBLE_LOCALES.indexOf(locale) !== -1;
}
exports.is18nLocale = is18nLocale;
function getCompleteLocale(locale) {
    if (!locale)
        return locale;
    if (I18N_LOCALE_ALIAS[locale])
        return I18N_LOCALE_ALIAS[locale];
    return locale;
}
exports.getCompleteLocale = getCompleteLocale;
function getShortLocale(locale) {
    if (locale.indexOf('-') === -1)
        return locale;
    return locale.split('-')[0];
}
exports.getShortLocale = getShortLocale;
function buildFileLocale(locale) {
    return getCompleteLocale(locale);
}
exports.buildFileLocale = buildFileLocale;
