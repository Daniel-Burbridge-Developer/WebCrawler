const {normalizeURL} = require('./crawl.js')
const {crawlPage} = require('./crawl.js')

const main = () => {

    if ((process.argv.length < 3) || (process.argv.length > 3)) {
        console.log("Yeah No");
        process.exit()
    }

    const url = process.argv[2]

    crawlPage(url)
    
}

main()
