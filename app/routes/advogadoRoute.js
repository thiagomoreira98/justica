module.exports = (app) => {

    var controller = require('../controllers/advogadoController');

    app.get('/advogados', controller.buscarAdvogados);
    app.get('/novoAdvogado', controller.novoAdvogado);
    app.post('/advogado/novo', controller.cadastrarAdvogado);
    app.get('/advogado/:codigo', controller.buscarAdvogadoPorCodigo);
    app.post('/advogado/alterar/:codigo', controller.alterarAdvogado);
    app.get('/advogado/excluir/:codigo', controller.deletarAdvogado);
}