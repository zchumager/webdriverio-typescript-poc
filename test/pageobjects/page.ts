import { browser } from '@wdio/globals'

export default class Page {
    public async open(url: string) {
        return browser.url(url)
    }
}