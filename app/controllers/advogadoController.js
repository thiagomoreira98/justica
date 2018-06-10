var model = require('../models/advogadoModel.js');

module.exports = {
    buscarAdvogados,
    buscarAdvogadoPorId,
    cadastrarAdvogado,
    alterarAdvogado,
    deletarAdvogado
}

function buscarAdvogados(req, res) {
    model.buscarAdvogados( (err, data) => {
        if (err)
            throw err;

        res.render('../app/views/advogados.ejs', { advogados: data });
    });
}

function buscarAdvogadoPorId(req, res) {
    model.buscarAdvogadoPorId(req.params.codigo, (err, data) => {
        if (err)
            throw err;

        res.render('../views/advogado.ejs', { advogado: data, title: data.adv_nome });
    });
}

function cadastrarAdvogado(req, res) {
    model.cadastrarAdvogado(dados, (err, data) => {
        if (err)
            throw err;

        res.redirect('/advogados');
    });
}

function alterarAdvogado(req, res) {
    model.alterarAdvogado(req.params.codigo, req.body, (err, data) => {
        if (err)
            throw err;

        res.redirect('/advogados');
    });
}

function deletarAdvogado(req, res) {
    model.deletarAdvogado(req.params.codigo, (err, data) => {
        if (err)
            throw err;

        res.end();
    });
}