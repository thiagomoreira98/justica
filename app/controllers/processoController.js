var model = require('../models/processoModel.js');

module.exports = {
    buscarProcessos,
    buscarProcessoPorId,
    cadastrarProcesso,
    alterarProcesso,
    deletarProcesso
}

function buscarProcessos(req, res) {
    model.buscarProcessos( (err, data) => {
        if (err)
            throw err;

        res.render('../views/processos.ejs', { Processos: data, title: 'Processos' });
    });
}

function buscarProcessoPorId(req, res) {
    model.buscarProcessoPorId(req.params.codigo, (err, data) => {
        if (err)
            throw err;

        res.render('../views/processo.ejs', { Processo: data, title: data.adv_nome });
    });
}

function cadastrarProcesso(req, res) {
    model.cadastrarProcesso(dados, (err, data) => {
        if (err)
            throw err;

        res.redirect('/processos');
    });
}

function alterarProcesso(req, res) {
    model.alterarProcesso(req.params.codigo, req.body, (err, data) => {
        if (err)
            throw err;

        res.redirect('/processos');
    });
}

function deletarProcesso(req, res) {
    model.deletarProcesso(req.params.codigo, (err, data) => {
        if (err)
            throw err;

        res.end();
    });
}