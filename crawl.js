const nodeUrl = require('node:url')
const {JSDOM} = require('jsdom')
const { link } = require('node:fs')

const normalizeURL = (url) => {
    return nodeUrl.parse(url).hostname
}

const getUrlsFromHTLML = (htmlBody, baseURL="") => {
    const dom = new JSDOM(htmlBody)
    const atags = dom.window.document.querySelectorAll('a')
    const links = []
    if (atags.length > 0) {
        for (const atag of atags) {
            links.push(atag.href)
        }
    }
    return links
}

module.exports = {
    normalizeURL, getUrlsFromHTLML
}