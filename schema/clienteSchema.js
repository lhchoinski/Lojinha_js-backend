const mongoose = require('mongoose');
const produtoSchema = require('./produtoSchema');

const Schema = mongoose.Schema;

const clienteShema = new Schema({
    idProduto: Number,
    nome: String,
    endereco: String,
    data_nasc: String,
    cpf: Number,
    contato: Number, 
    produtos:{
        type:[produtoSchema]
    }
 
});

module.exports = clienteShema;