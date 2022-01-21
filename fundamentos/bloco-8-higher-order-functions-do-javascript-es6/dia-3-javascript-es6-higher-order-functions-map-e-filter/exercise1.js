const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
    return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

console.log(formatedBookNames());



// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const expectedResults = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
];

function nameAndAge() {
    return books
        .map((book) => (
            {
                author: book.author.name,
                age: book.releaseYear - book.author.birthYear,
            }
        ))
        .sort((obj1, obj2) => obj1.age - obj2.age);
}

console.log(nameAndAge());


// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.


const expectedResult2 = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
    }
];

function fantasyOrScienceFiction() {
    return books.filter((book) => (
        book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    ));
}

console.log(fantasyOrScienceFiction());

// Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const expectedResult3 = [
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
];

function oldBooksOrdered() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => (
        book.releaseYear < currentYear - 60
    )).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult4 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    return books
        .filter((book) => wantedGenres.includes(book.genre))
        .map((book) => book.author.name).sort();
}

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult5 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books
        .filter((book) => currentYear - book.releaseYear > 60)
        .map((book) => book.name);
}

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

function authorWith3DotsOnName() {
    return books.filter((book) => (
        book.author.name[1] === '.'
        && book.author.name[4] === '.'
        && book.author.name[7] === '.'
    ))[0].name;
}

// Você também pode solucionar da seguinte forma:

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
    return books.find((book) => (
        book.author.name.split(' ')
            .filter((word) => word.endsWith('.')).length === 3
    )).name;
}