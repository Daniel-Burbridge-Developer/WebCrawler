const {normalizeURL} = require('./crawl.js')

const main = () => {

    if ((process.argv.length < 3) || (process.argv.length > 3)) {
        console.log("Yeah No");
        process.exit()
    }

        console.log(`BASE URL = ${process.argv[2]}`)
    
}

main()
