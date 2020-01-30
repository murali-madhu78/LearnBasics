let myBook = {
    title: 'The legend',
    author: 'Murali Uppangala',
    pageCount: 300
}

let herBook = {
    title: 'The Titan',
    author: 'Rakshitha Uppangala',
    pageCount: 400
}

let getBookSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author}`)
}

let mybookSumary = getBookSummary(myBook)
let herBookSummary = getBookSummary(herBook)

console.log(getBookSummary(myBook).pageCountSummary)