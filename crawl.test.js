const {test, expect} = require('@jest/globals')
const {normalizeURL, getUrlsFromHTLML} = require('./crawl.js')

test('normalizeURLWithProtocol', () => {
    expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev")
    expect(normalizeURL("https://blog.boot.dev/path")).toBe("blog.boot.dev")
    expect(normalizeURL("http://blog.boot.dev/path/")).toBe("blog.boot.dev")
    expect(normalizeURL("http://blog.boot.dev/path")).toBe("blog.boot.dev")
});

// TODO: IMPLEMENT THIS TEST / Solution
// test('normalizeURL-NoProtocol', () => {
//    expect(normalizeURL("https://blog.boot.dev/path/")).toBe("blog.boot.dev") 
// });

test('LinksFromHTML', () => {
expect(getUrlsFromHTLML(`
<h1>This is a Test Page with 2 Links</h1>
<a href="https://blog.boot.dev/path/">Link 1</a>
<a href="https://blog.boot.dev/">Link 2</a>`)).toEqual(["https://blog.boot.dev/path/", "https://blog.boot.dev/"])
expect(getUrlsFromHTLML(`<body>
<h1>This is a Test Page with 0 Links</h1>
</body>`)).toEqual([])
});

