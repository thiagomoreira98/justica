var client = require('../../config/dbConnection');
var tabela = 'ADVOGADO';

module.exports = {
    buscarAdvogados,
    buscarAdvogadoPorCodigo,
    cadastrarAdvogado,
    alterarAdvogado,
    deletarAdvogado
}

function buscarAdvogados(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}

function buscarAdvogadoPorCodigo(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE adv_codigo = ${id}`, callback);
}

function cadastrarAdvogado(advogado, callback) {
    var msql = `INSERT INTO ${tabela} SET ? `;
    client.query(msql, advogado, callback);
}

function alterarAdvogado(id, advogado, callback) {
    var msql = `UPDATE ${tabela} SET adv_nome = '${advogado.adv_nome}', adv_apelido = '${advogado.adv_apelido}', adv_sexo = '${advogado.adv_sexo}', adv_faculdade = '${advogado.adv_faculdade}', adv_dtFormatura = '${advogado.adv_dtFormatura || '2018-12-10'}' WHERE adv_codigo = ${id}`;
    client.query(msql, callback);
}

function deletarAdvogado(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE adv_codigo = ${id}`, callback);
}