// 4 - Encontre o livro com o maior nome.

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  }
  
  function longestNamedBook() {
    return books.reduce((biggestBook, currentBook) => {
      if (currentBook.name.length > biggestBook.name.length) {
        return currentBook;
      }
      return biggestBook;
    });
  }

  console.log(longestNamedBook());