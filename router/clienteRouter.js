const clienteController = require('../controller/clienteController');
const express = require('express')
const router = express.Router()

router.post('/cadastro', clienteController.cadastrar)
router.get('/listar', clienteController.listar)
router.get('/listar/:id', clienteController.buscarPorId)
router.put('/atualizar/:id', clienteController.atualizar)
router.put('/addproduto/:id', clienteController.addTarefa)
router.delete('/excluir/:id', clienteController.excluir)

module.exports = router;