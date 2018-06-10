var client = require('../config/dbConnection');
var tabela = 'advogados';

module.exports = {
    buscarAdvogados,
    buscarAdvogadoPorId,
    cadastrarAdvogado,
    alterarAdvogado,
    deletarAdvogado
}

function buscarAdvogados(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}

function buscarAdvogadoPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE adv_codigo = ${id}`, callback);
}

function cadastrarAdvogado(adv, callback) {
    var msql = `INSERT INTO ${tabela}() 
        VALUES(${adv.nome}, ${adv.apelido}, ${adv.sexo}, ${adv.faculdade}, ${adv.dtformatura})`;

    client.query(msql, callback);
}

function alterarAdvogado(id, adv, callback) {
    var msql = `UPDATE ${tabela} SET 
                    adv_nome = ${adv.nome}, 
                    adv_apelido = ${adv.apelido},
                    adv_sexo = ${adv.sexo},
                    adv_faculdade = ${adv.faculdade},
                    adv_dtFormatura = ${adv.dtFormatura},
                WHERE adv_codigo = ${id}`;
                
    client.query(msql, callback);
}

function deletarAdvogado(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE adv_codigo = ${id}`, callback);
}