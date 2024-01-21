const {normalizeURL} = require('./crawl.js')

const main = () => {

    normalizeURL("https://blog.boot.dev/path/");
    normalizeURL("https://blog.boot.dev/path");
    normalizeURL("http://blog.boot.dev/path/");
    normalizeURL("http://blog.boot.dev/path");

}

main()
