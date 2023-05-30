const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const clienteSchema = require('./clienteSchema')
const produtoSchema = require('./produtoSchema')

const carrinhoShema = new Schema({
    
    cliente:[clienteSchema],
    produto:[produtoSchema],
    qtda: String 
    

});

module.exports = carrinhoShema;