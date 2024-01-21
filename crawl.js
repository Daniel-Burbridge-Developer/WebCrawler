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

const crawlPageDepreciated = async (url) => {

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
}

const crawlPage = async (baseURL, currentURL, pages) => {
    if (!currentURL.contains(baseURL)){
        return
    }
    
    currentURL = normalizeURL(currentURL, baseURL);

    if (pages[currentURL]){
        pages[currentURL] += 1
        return pages
    } else {
        if (currentURL != baseURL) {
            pages[currentURL] = 1
        } else {
            pages[currentURL] = 0
        }      
    }

    const response = await fetch(currentURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/html'
        }
    }) 
    
    if (response.status > 399) {
        console.log("Error - ", response.status)
        return
    } else {
        const html = await response.text()
        const htmlBody = new JSDOM(html).window.document.querySelector('body').innerHTML
        const links = getUrlsFromHTLML(htmlBody, baseURL)
        for (const link of links) {
            crawlPage(baseURL, link, pages)
        }
    } 

    return pages
}


module.exports = {
    normalizeURL, getUrlsFromHTLML, crawlPage
}