const database = require('../../database/database');

exports.getBooks = function () {
    return database.query('select * from Books');
}

exports.getBook = function (bookID) {
    return database.query('select * from Books where "id" = $1', [bookID]);
}

exports.deleteBook = function (bookID) {
    return database.none('delete from Books where "id" = $1', [bookID]);
}

exports.saveBook = function(book) {
    return database.one('insert into Books (nome, codigoeditora, issbn, quantidade, codigoassunto) values ($1, $2, $3, $4, $5) returning *',
    [book.nome, book.codigoeditora, book.issbn, book.quantidade, book.codigoassunto]);
}



