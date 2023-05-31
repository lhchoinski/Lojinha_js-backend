const clienteController = require('../controller/clienteController');
const express = require('express')
const router = express.Router()

router.post('/cadastro', clienteController.cadastrar)
router.get('/listar', clienteController.listar)
router.get('/listar/:_id', clienteController.buscarPorId)
router.put('/atualizar/:_id', clienteController.atualizar)
router.put('/addproduto/:_id', clienteController.addProduto)
router.delete('/excluir/:_id', clienteController.excluir)

module.exports = router;