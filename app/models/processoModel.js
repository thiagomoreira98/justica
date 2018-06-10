var client = require('../config/dbConnection');
var tabela = 'processo';

module.exports = {
    buscarProcessos,
    buscarProcessoPorId,
    cadastrarProcesso,
    alterarProcesso,
    deletarProcesso
}

function buscarProcessos(callback) {
    client.query(`SELECT * FROM ${tabela}`, callback);
}

function buscarProcessoPorId(id, callback) {
    client.query(`SELECT * FROM ${tabela} WHERE pro_codigo = ${id}`, callback);
}

function cadastrarProcesso(pro, callback) {
    var msql = `INSERT INTO ${tabela}() 
        VALUES
        (
            ${pro.nome},
            ${pro.apelido},
            ${pro.sexo},
            ${pro.faculdade},
            ${pro.dtformatura}
            ${pro.adv_codigo}
        )`;

    client.query(msql, callback);
}

function alterarProcesso(id, pro, callback) {
    var msql = `UPDATE ${tabela} SET 
                    pro_nome = ${pro.nome}, 
                    pro_apelido = ${pro.apelido},
                    pro_sexo = ${pro.sexo},
                    pro_faculdade = ${pro.faculdade},
                    pro_dtFormatura = ${pro.dtFormatura},
                    adv_codigo = ${pro.adv_codigo},
                WHERE pro_codigo = ${id}`;
                
    client.query(msql, callback);
}

function deletarProcesso(id, callback) {
    client.query(`DELETE FROM ${tabela} WHERE pro_codigo = ${id}`, callback);
}