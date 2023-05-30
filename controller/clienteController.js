const clienteModel = require('../models/clienteModel')
const produtoModel = require('../models/produtoModel');

class ClienteController{

    async cadastrar(req, res){
        const cliente = req.body

        // gerador de id
        const obj = await clienteModel.findOne({}).sort({'idCliente': -1});  // encontra um, faz o sort para ordenar 1 crescente e -1 decrescente       
        usuario.idCliente = obj == null ? 1 : obj.idCliente + 1; // quando for o primeiro o id será 1, após isso será sempre id+1
        
        const produto = await produtoModel.findOne({'idProduto': cliente.produto})
        cliente.produto = produto

        const resultado = await clienteModel.create(cliente)
        res.send({
            message: "Cliente cadastrado com sucesso!",
            usuario: resultado
        }) 
    }
    
    async listar(req, res){
        const cliente = await clienteModel.find({})
        res.json(cliente)
        
    }

    async buscarPorId(req, res){
        const id = req.params.id
        const cliente = await clienteModel.findOne({'idCliente': id})
        res.json(cliente)
    }

    // atualiza informacoes do usuario
    async atualizar(req, res){
        const id = req.params.id // id vindo dos parametros da requisição
        const cliente = req.body // alteração vindo do body da requisição

        // pelo atualizar a tarefa é substituida
        const produto = await produtoModel.findOne({'idProduto': cliente.produto})
        cliente.produto = produto

        const _id = (await clienteModel.findOne({'idCliente' : id}))._id; // compara o id do usuario com o id passado na requisição e retorna o _id criado automaticamente no mongo
        await clienteModel.findByIdAndUpdate(String(_id), cliente) // atualize usuario do _id com a informacoes 'usuario' que veio do body
        res.send({
            message: "Usuario atualizado com sucesso!"
        })
    }

     // add tarefa a um usuario por id, posso mandar um array de tarefas
     async addTarefa(req, res){
        const id = req.params.id // id vindo dos parametros da requisição
        const body = req.body // tarefa vindo do body da requisição

        const produto = await produtoModel.find({'idProduto' : body.produto})
        const cliente = await clienteModel.findOne({'idCliente' : id})

        const _id = cliente._id 
            const clienteEproduto = await clienteModel.findByIdAndUpdate(_id, {$push: {produto: produto}}, 
                {upsert: true, new: true}) 
                res.send({
                    message: "produto adicionado ao carrinho do cliente com sucesso!",
                    produto: clienteEproduto.produto
                })
            }

            async excluir(req, res){
                const id = req.params.id
                const _id = (await clienteModel.findOne({'idCliente' : id}))._id;
                await clienteModel.findByIdAndDelete(String(_id))
                res.send({
                    message: "Cliente excluído!"
                })
            }
}

module.exports = new ClienteController()