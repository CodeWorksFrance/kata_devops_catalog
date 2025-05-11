const {getBooks} = require('./index.js')

describe('catalog', () => {
  it('gets all the books', () => {
    const books = getBooks()
    expect(books.length).toBeGreaterThan(0)
  })
})
 