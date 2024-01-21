const {test, expect} = require('@jest/globals')
const {normalizeURL} = require('./crawl.js')

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