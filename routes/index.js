// const db = require("../config/conexaoDB");


const routes = deps => {
    const { app } = deps;

    app.get('/oi', function (req, res) {
        res.send('hello world')
        // try {
        //     res.send(await db.modUsuario().all())
        // } catch (error) {
        //     res.send(error)
        // }
    })
    // app.get('/andre', async (req, res) => {
    //     // try {
    //     //     res.send(await db.modUsuario().all())
    //     // } catch (error) {
    //     //     res.send(error)
    //     // }
    //     // next();
    // });

    // server.get('/usuario/findOne:id', async (req, res, next) => {
    //     // console.warn(req.href());
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.modUsuario().findOne(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });

    // server.post('/usuario/login', async (req, res, next) => {
    //     var password = null;
    //     const { user, pass } = req.params;
    //     password = SHA256(pass).toString();
    //     console.log(password);
    //     try {
    //         res.send(await db.modUsuario().login(user, password))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });




    // //permite escrever código assicrono com a legibilidade sincrono
    // server.get('/agenda', async (req, res, next) => {
    //     try {
    //         res.send(await db.modAgenda().all())
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();

    //     //pelo fato de está usando promise posso usar o then
    //     /*
    //     sem await e asc
    //     db.modAgenda().all().then(agenda => {
    //         res.send(agenda);
    //         next();
    //     }).catch(error => {
    //         res.send(error);
    //         next();
    //     }); */
    // });
    // server.get('/clipping/clipping-agronegocio-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.clippingAgronegocioModule().clippingAgronegocioUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/video/video-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.videoModule().videoUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/rede/necessidade-rede-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.necessidadeRedeModule().necessidadeRedeUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/inteligencia/inteligencia-mercado-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.inteligenciaMercadoModule().inteligenciaMercadoUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/galeria/galeria-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.galeriaModule().galeriaUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/estatistica/estatistica-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.estatisticaModule().estatisticaUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/comunicacao/comunicacao-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.comunicacaoModule().comunicacaoUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/noticia/noticia-usuario:id', async (req, res, next) => {
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.noticiaModule().noticiaUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/agenda/agenda-usuario:id', async (req, res, next) => {
    //     // console.warn(req.href());
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.modAgenda().agendaUsuario(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.get('/agenda/find-one:id', async (req, res, next) => {
    //     // console.warn(req.href());
    //     const { id } = req.query;
    //     try {
    //         res.send(await db.modAgenda().findOne(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });
    // server.post('/agenda', async (req, res, next) => {
    //     const { titulo, userId } = req.params;
    //     try {
    //         res.send(await db.modAgenda().save(titulo, userId))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });

    // server.put('/agenda', async (req, res, next) => {
    //     const { id, titulo } = req.params;        
    //     try {
    //         res.send(await db.modAgenda().update(titulo, id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });

    // server.del('/agenda', async (req, res, next) => {
    //     const { id } = req.params;
    //     try {
    //         res.send(await db.modAgenda().del(id))
    //     } catch (error) {
    //         res.send(error)
    //     }
    //     next();
    // });


    // //Rota principal
    // server.get('/', (req, res, next) => {
    //     res.send('API - ASSODEERE');
    //     next();
    // });
}

module.exports = routes;