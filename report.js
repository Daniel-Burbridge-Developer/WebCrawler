
const printReport = (pages) => {
    console.log("Report is Starting!")

    pages = sortReport(pages)
    // print report "Found count internal links to page"
    for (const page of pages) {
        console.log(`Found ${page[1]} internal links to ${page[0]}`)
    }
}

const sortReport = (pages) => {
    return Object.entries(pages).sort((a, b) => b[1] - a[1])
}

module.exports = {
    printReport
}