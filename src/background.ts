import { browser } from 'webextension-polyfill-ts'
import '~/assets/icon.png'

browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    browser.tabs.sendMessage(tabId, { id: 'urlChanged' })
  }
})
