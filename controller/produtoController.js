const produtoModel = require('../models/produtoModel');

class ProdutoController {

    
    async listar(req, res){
        const produtos = await produtoModel.find({}) 
        res.json(produtos)
    
    }
    async salvar(req, res){
        const {nome,descricao,marca,preco,qtda} = req.body

        // gerador de id
        const obj = await produtoModel.findOne({}).sort({'idProduto': -1});  

        const produto = {
            idProduto: obj == null ? 1 : obj.idProduto + 1,
            nome,
            descricao,
            marca,
            preco ,
            qtda,
        }
        const resultado = await produtoModel.create(produto)

        res.send({
            message: "Produto cadastrado com sucesso!",
            produto: resultado
        }) 
    }
    async excluir(req, res){
        const id = req.params.id
        const _id = (await produtoModel.findOne({'idProduto' : id}))._id;
        await produtoModel.findByIdAndDelete(String(_id))
        res.send({
            message: "Tarefa excluída!"
        })
    }

    async buscarPorId(req, res){
        const id = req.params.id
        const produto = await produtoModel.findOne({'idProduto': id})
        res.json(produto)
    }

    async atualizar(req, res){
        const id = req.params.id
        const produto = req.body
        const _id = (await produtoModel.findOne({'idProduto' : id}))._id;
        await produtoModel.findByIdAndUpdate(String(_id), produto)
        res.send({
            message: "produto atualizado com sucesso!",
            produto: produto
        })
    }
}

    module.exports = new ProdutoController();