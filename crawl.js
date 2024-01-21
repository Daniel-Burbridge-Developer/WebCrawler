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

const crawlPage = async (url) => {


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html'
            }
        })
        if (response.status > 399) {
            console.log("Error - ", response.status)
            return
        }
        const html = await response.text()
        const htmlBody = new JSDOM(html).window.document.querySelector('body').innerHTML

        console.log(htmlBody)
    } catch (error) {
        console.log("Error - ", error)
    }
}


module.exports = {
    normalizeURL, getUrlsFromHTLML, crawlPage
}