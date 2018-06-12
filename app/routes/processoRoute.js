module.exports = (app) => {

    var controller = require('../controllers/processoController');

    app.get('/processos', controller.buscarProcessos);
    app.get('/novoProcesso', controller.novoProcesso);
    app.post('/processo/novo', controller.cadastrarProcesso);
    app.get('/processo/:codigo', controller.buscarProcessoPorCodigo);
    app.post('/processo/alterar/:codigo', controller.alterarProcesso);
    app.get('/processo/excluir/:codigo', controller.deletarProcesso);
}