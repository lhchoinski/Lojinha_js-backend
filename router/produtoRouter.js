const produtoController = require('../controller/produtoController');
const express = require('express');
const router = express.Router();
router.get('/listar', produtoController.listar);
router.post('/salvar', produtoController.salvar);
router.delete('/excluir/:_id',produtoController.excluir)
router.get("/listar/:_id",produtoController.buscarPorId)
router.put('/atualizar/:_id', produtoController.atualizar)

module.exports = router;