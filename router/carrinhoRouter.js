const carrinhoController = require('');
const express = require('express')
const router = express.Router()

router.get('/listar', clienteController.listar)
router.put('/atualizar/:id', clienteController.atualizar)
router.delete('/excluir/:id', clienteController.excluir)

module.exports = router;