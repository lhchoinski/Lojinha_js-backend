const produtoController = require('../controller/produtoController');
const express = require('express');
const router = express.Router();
router.get('/listar', produtoController.listar);
router.post('/salvar', produtoController.salvar);
router.delete('/deletar/:id',produtoController.excluir)
router.get("/listar/:id",produtoController.buscarPorId)
router.put('/atualizar/:id', produtoController.atualizar)

module.exports = router;