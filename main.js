const {normalizeURL} = require('./crawl.js')
const {crawlPage} = require('./crawl.js')
const {getUrlsFromHTLML} = require('./crawl.js')

const main = () => {

    if ((process.argv.length < 3) || (process.argv.length > 3)) {
        console.log("No Webpage URL provided by user.");
        process.exit()
    }

    try {
        const url = process.argv[2]
        const baseURL = normalizeURL(url)
        const currentURL = baseURL
        const pages = crawlPage(baseURL, currentURL, {})
        console.log(pages)
    } catch (error) {
        console.log(error)
    }

}

main()
