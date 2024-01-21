const {crawlPage} = require('./crawl.js')
const {printReport} = require('./report.js')

const main = async () => {

    if ((process.argv.length < 3) || (process.argv.length > 3)) {
        console.log("No Webpage URL provided by user.");
        process.exit()
    }

    try {
        const url = process.argv[2]
        const baseURL = url
        const currentURL = url
        const pages = await crawlPage(baseURL, currentURL, {})
        printReport(pages)
    } catch (error) {
        console.log(error)
    }

    
}

main()
