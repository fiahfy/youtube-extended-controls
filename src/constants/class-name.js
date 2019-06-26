import browser from 'webextension-polyfill'

const id = 'e' + browser.runtime.id.replace('@', '')

const classNames = ['backwordButton', 'forwordButton']

export default classNames.reduce((carry, className) => {
  const kebabName = className.replace(/([A-Z])/g, (s) => {
    return '-' + s.charAt(0).toLowerCase()
  })
  return {
    ...carry,
    [className]: `${id}-${kebabName}`
  }
}, {})
