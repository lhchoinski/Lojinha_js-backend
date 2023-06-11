const mongoose = require('mongoose');
const clienteShema = require('./clienteSchema');
const produtoSchema = require('./produtoSchema');

const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    idPedido: Number,
    cliente: [clienteShema],
    produto: [produtoSchema]
});

module.exports = pedidoSchema;