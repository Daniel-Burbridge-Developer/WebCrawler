const nodeUrl = require('node:url')

const normalizeURL = (url) => {
    return nodeUrl.parse(url).hostname
}

module.exports = {
    normalizeURL
}