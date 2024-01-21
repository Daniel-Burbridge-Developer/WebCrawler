const nodeUrl = require('node:url')
const JSDOM = require('jsdom')

const normalizeURL = (url) => {
    return nodeUrl.parse(url).hostname
}

const getUrlsFromHTLML = (htmlBody, baseURL) => {
    page = new JSDOM(htmlBody)
    links = page.dom.window.document.querySelectorAll('a')
    links.array.forEach(link => {
        console.log(link)
    });
}

module.exports = {
    normalizeURL, getLinks
}