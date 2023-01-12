export function clientLanguage() {
  const lang = navigator.language.split('-')[0].toUpperCase()
  // eslint-disable-next-line no-constant-condition
  if (lang !== 'TR' || lang !== 'EN') {
    return 'EN'
  } else {
    return lang
  }
}
