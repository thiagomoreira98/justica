var model = require('../models/advogadoModel.js');

module.exports = {
    buscarAdvogados,
    buscarAdvogadoPorCodigo,
    novoAdvogado,
    cadastrarAdvogado,
    alterarAdvogado,
    deletarAdvogado
}

function buscarAdvogados(req, res) {
    model.buscarAdvogados((err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/advogados.ejs', { advogados: data });
    });
}

function buscarAdvogadoPorCodigo(req, res) {
    model.buscarAdvogadoPorCodigo(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.render('../app/views/alteraAdvogado.ejs', { advogado: data[0] });
    });
}

function novoAdvogado(req, res) {
    res.render('../app/views/novoAdvogado.ejs');
}

function cadastrarAdvogado(req, res) {
    model.cadastrarAdvogado(req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/advogados');
    });
}

function alterarAdvogado(req, res) {
    model.alterarAdvogado(req.params.codigo, req.body, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/advogados');
    });
}

function deletarAdvogado(req, res) {
    model.deletarAdvogado(req.params.codigo, (err, data) => {
        if (err)
            return res.json(err);

        res.redirect('/advogados');
    });
}