var controller = require('../controllers/advogadoController');

app.get('/advogados', controller.buscarAdvogados);
app.get('/advogado/:codigo', controller.buscarAdvogadoPorCodigo);
app.post('/advogado', controller.cadastrarAdvogado);
app.put('/advogado/:codigo', controller.alterarAdvogado);
app.delete('/advogado/:codigo', controller.deletarAdvogado);