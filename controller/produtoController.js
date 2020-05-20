const produtoController = deps => {
    return {
        findAll: () => {
            const { fetchHelper } = deps;
            return fetchHelper.fetchHelper({ method: 'GET', route: '/produto/' })
        },
        findOne: (id) => {
            const { fetchHelper } = deps;
            return fetchHelper.fetchHelper({ method: 'GET', route: '/produto/' + id })
        },
        create: (titulo, descricao, preco) => {
            const { fetchHelper } = deps;
            const body = JSON.stringify({
                titulo: titulo,
                descricao: descricao,
                preco: preco})
            return fetchHelper.fetchHelper({ method: 'POST', route: '/produto/', body: body })
        },
        update: (id, titulo, descricao, preco) => {
            const { fetchHelper } = deps;
            const body = JSON.stringify({
                titulo: titulo,
                descricao: descricao,
                preco: preco})
            return fetchHelper.fetchHelper({ method: 'PUT', route: '/produto/'+id, body: body })
        },
        delete: (id) => {
            const { fetchHelper } = deps;
            return fetchHelper.fetchHelper({ method: 'DELETE', route: '/produto/'+id})
        }
    }
}
module.exports = produtoController;

