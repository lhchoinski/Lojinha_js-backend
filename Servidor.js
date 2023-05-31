const express = require('express');
const srv = express();

srv.use(express.json());

srv.listen(3001, function() {console.log('Servidor rodando na porta 3000!');
});
srv.use(express.json());

const produtoRouter = require('./router/produtoRouter');
const clienteRouter = require('./router/clienteRouter');


srv.use('/produto',produtoRouter)
srv.use('/cliente',clienteRouter)



require('./MongoDB');



