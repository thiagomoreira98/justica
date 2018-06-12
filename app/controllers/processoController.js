var model = require('../models/processoModel.js'),
    advogadoModel = require('../models/advogadoModel');

module.exports = {
    buscarProcessos,
    buscarProcessoPorCodigo,
    novoProcesso,
    cadastrarProcesso,
    alterarProcesso,
    deletarProcesso
}

function buscarProcessos(req, res) {
    model.buscarProcessos((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/processos.ejs', { processos: data, title: 'Processos' });
    });
}

function buscarProcessoPorCodigo(req, res) {
    model.buscarProcessoPorCodigo(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        advogadoModel.buscarAdvogados((err2, advs) => {
            if (err2)
                return res.json(err2);

            res.render('../app/views/alteraProcesso.ejs', { processo: data[0], advogados: advs });
        });
    });
}

function novoProcesso(req, res) {
    advogadoModel.buscarAdvogados((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/novoProcesso.ejs', { advogados: data });
    });
}

function cadastrarProcesso(req, res) {
    model.cadastrarProcesso(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/processos');
    });
}

function alterarProcesso(req, res) {
    model.alterarProcesso(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/processos');
    });
}

function deletarProcesso(req, res) {
    model.deletarProcesso(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/processos');
    });
}