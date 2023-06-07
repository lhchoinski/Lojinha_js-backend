const express = require('express');
const srv = express();
const cors = require('cors')

srv.use(express.json());
srv.use(cors());

srv.listen(3000, function() {console.log('Servidor rodando na porta 3000!');
});
srv.use(express.json());

const produtoRouter = require('./router/produtoRouter');
const clienteRouter = require('./router/clienteRouter');


srv.use('/produto',produtoRouter)
srv.use('/cliente',clienteRouter)



require('./MongoDB');



