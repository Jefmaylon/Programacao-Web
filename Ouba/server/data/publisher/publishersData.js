const { func } = require('../../database/database');
const database = require('../../database/database');

exports.getPublishers = function () {
    return database.query('select * from editora');
}

exports.getPublisher = function(publisherID) {
    return database.query('select * from editora where id = $1', [publisherID]);
}

exports.deletePublisher = function (publisherID) {
    return database.none('delete from editora where id = $1', [publisherID]);
}


exports.savePublisher = function (publisher) {
    return database.one('insert into postgres (id, nome, endereco, telefone, gerente) values ($1, $2, $3,$4,$5) returning *',
    [publisher.id, publisher.nome, publisher.endereco, publisher.telefone, publisher.telefone, publisher.gerente]);
}