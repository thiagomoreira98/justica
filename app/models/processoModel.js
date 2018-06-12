var client = require('../../config/dbConnection');
var tabela = 'PROCESSO';

module.exports = {
    buscarProcessos,
    buscarProcessoPorCodigo,
    cadastrarProcesso,
    alterarProcesso,
    deletarProcesso
}

function buscarProcessos(callback) {
    client.query(`SELECT * FROM ${tabela} p INNER JOIN ADVOGADO a ON a.adv_codigo = p.adv_codigo`, callback);
}

function buscarProcessoPorCodigo(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pro_codigo = ${id}`, callback);
}

function cadastrarProcesso(processo, callback) {
    var msql = `INSERT INTO ${tabela} SET ? `;
    client.query(msql, processo, callback);
}

function alterarProcesso(id, processo, callback) {
    var msql = `UPDATE ${tabela} SET pro_nomereu = '${processo.pro_nomereu}', pro_descricao = '${processo.pro_descricao}', pro_varatribunal = '${processo.pro_varatribunal}', pro_dataprocesso = '${processo.pro_dataprocesso || '2018-10-12'}', adv_codigo = '${processo.adv_codigo}' WHERE pro_codigo = ${id}`;
    client.query(msql, callback);
}

function deletarProcesso(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pro_codigo = ${id}`, callback);
}