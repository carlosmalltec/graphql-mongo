const redis = require('../config/redis');

const userController = deps => {
    return {
        findAll: () => {
            const { fetchHelper } = deps;
            return fetchHelper.fetchHelper({ method: 'GET', route: '/usuario/index' })
        },
        findOne: async (id) => {
            const { fetchHelper } = deps;
            //  var tokenExistente = redis.getCache('findone_usuariox' + id);
            return fetchHelper.fetchHelper({ method: 'GET', route: '/usuario/view/' + id })
            // await redis.setCache('findone_usuariox' + id, data);
        },
        create: (username, password) => {
            const { fetchHelper } = deps;
            const body = JSON.stringify({
                username: username,
                password: password
            })
            return fetchHelper.fetchHelper({ method: 'POST', route: '/usuario/create', body: body })
        },
        login: (username, password) => {
            const { fetchHelper } = deps;
            const body = JSON.stringify({
                username: username,
                password: password
            });
            const dados = fetchHelper.fetchHelper({ method: 'POST', route: '/usuario/login', body: body });
            return dados.then(function (resp) {
                const tokenExistente = redis.getCache('token_usuario' + resp.usuario.id);
                //obs, só gravando mesmo no redis
                if (!tokenExistente) {
                    redis.setCache('token_usuario' + resp.usuario.id, resp.token);
                    return resp;
                }
            });
        },
        recuperar: (username) => {
            const { fetchHelper } = deps;
            const body = JSON.stringify({ username: username })
            return fetchHelper.fetchHelper({ method: 'POST', route: '/usuario/recuperar', body: body })
        }
    }
}
module.exports = userController;



