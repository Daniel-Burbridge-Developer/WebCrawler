const {test, expect} = require('@jest/globals')
const {normalizeURL} = require('./crawl.js')

test('https:// normalization', () => {
    expect(normalizeURL('https://www.example.com')).toBe('www.example.com')
});

test('http:// normalization', () => {
    expect(normalizeURL('http://www.example.com')).toBe('www.example.com')
});

test('/', () => {
    expect(normalizeURL('www.example.com/')).toBe('www.example.com')
});