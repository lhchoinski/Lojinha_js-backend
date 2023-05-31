const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    idProduto: Number,
    nome: String,
    descricao: String,
    marca: String,
    preco: String,
})

module.exports = produtoSchema