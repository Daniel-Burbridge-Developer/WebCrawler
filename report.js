
const printReport = (pages) => {
    console.log("Report is Starting!")

    pages = sortReport(pages)
    // print report "Found count internal links to page"
    for (const page of pages) {
        console.log(`Found ${page[1]} internal links to ${page[0]}`)
    }
}

const sortReport = (pages) => {
    sortablePages =[]
    for (let page in pages) {
        sortablePages.push([page, pages[page]])
    }
    return sortablePages.sort((a, b) => b[1] - a[1])
}

module.exports = {
    printReport
}