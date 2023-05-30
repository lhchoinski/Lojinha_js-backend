const express = require('express');
const srv = express();

srv.use(express.json());

srv.listen(3000, function() {console.log('Servidor rodando na porta 3000!');
});
srv.use(express.json());

const produtoRouter = require('./router/produtoRouter');
const clienteRouter = require('./router/clienteRouter');
const carrinhoRouter = require('./router/carrinhoRouter')

srv.use('/produto',produtoRouter)
srv.use('/cliente',clienteRouter)
srv.use('/carrinho',carrinhoRouter)



require('./MongoDB');



