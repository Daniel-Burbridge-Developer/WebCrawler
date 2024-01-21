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
    expect(getUrlsFromHTLML("<h1>This is a Test Page with no Links</h1>", "./testHTMLOne")).toBe(null)
    expect(getUrlsFromHTLML('<h1>This is a Test Page with 2 Links</h1><ahref="https://www.google.com">Google</a><ahref="https://www.facebook.com">Facebook</a>')).toBe(['https://www.google.com', 'https://www.facebook.com'])
});