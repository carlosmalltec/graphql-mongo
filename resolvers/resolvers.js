const controller = require('../controller');

const userResolvers = {
    user({ id }) {
        return controller.userController().findOne(id)
    },
    users() {
        return controller.userController().findAll()
    },
    createUser({ username, password }) {
        return controller.userController().create(username, password)
    },
    loginUser({ username, password }) {
        return controller.userController().login(username, password)
    },
    recuperarUser({ username }) {
        return controller.userController().recuperar(username)
    },
    produto({ id }) {
        return controller.produtoController().findOne(id)
    },
    produtos() {
        return controller.produtoController().findAll()
    },
    createProduto({ titulo, descricao, preco }) {
        return controller.produtoController().create(titulo, descricao, preco)
    },
    updateProduto({ id, titulo, descricao, preco }) {
        return controller.produtoController().update(id, titulo, descricao, preco)
    },
    deleteProduto({ id }) {
        return controller.produtoController().delete(id)
    }
};

module.exports = userResolvers;
