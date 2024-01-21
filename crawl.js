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
            if (baseURL != "") {
                if (atag.href.includes(baseURL)) {
                    links.push(atag.href)
                } else {
                    if (atag.href.startsWith("http")) {
                        continue
                    }
                    links.push(`${baseURL}${atag.href}`)
                }
            } else {
                links.push(atag.href)
            }
        }
    }
    return links
}

const crawlPage = async (baseURL, currentURL, pages) => {
    if (!currentURL.includes(baseURL)){
        return
    }
    
    normalCurrentURL = normalizeURL(currentURL, baseURL);

    if (pages[normalCurrentURL]){
        pages[normalCurrentURL] += 1
        return pages
    } else {
        if (currentURL != baseURL) {
            pages[normalCurrentURL] = 1
        } else {
            pages[normalCurrentURL] = 0
        }      
    }

    const response = await fetch(currentURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/html'
        }
    }) 
    console.log(response.status)
    
    if (response.status > 399) {
        console.log("Error - ", response.status)
        return
    } else {
        const html = await response.text()
        const htmlBody = new JSDOM(html).window.document.querySelector('body').innerHTML
        const links = getUrlsFromHTLML(htmlBody, baseURL)
        console.log("Got the links: ", links)
        for (const link of links) {
            console.log(link)
            crawlPage(baseURL, link, pages)
        }
    } 

    return pages
}


module.exports = {
    normalizeURL, getUrlsFromHTLML, crawlPage
}