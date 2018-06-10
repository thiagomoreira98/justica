var controller = require('../controllers/processoController');

app.get('/processo', controller.buscarProcessos);
app.get('/processo/:codigo', controller.buscarProcessoPorCodigo);
app.post('/processo', controller.cadastrarProcesso);
app.put('/processo/:codigo', controller.alterarProcesso);
app.delete('/processo/:codigo', controller.deletarProcesso);