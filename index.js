const app = require("express")();
const expressGraphql = require("express-graphql");
const schema = require('./schema/user');
const resolvers = require('./resolvers/resolvers');
const bodyParser = require("body-parser");


//rotas
const routes = require('./routes/index')({ app });

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// app.get('/cache/:id', async (req, res) => {
//   const id = req.params.id;
//   const value = await getCache('get' + id);
//   if (value) {
//     res.send('ID ok cache' + JSON.stringify(value));
//   } else {
//     // const idvalue = await findusuario(req.params.id);
//     const idvalue = 22;
//     const value = await setCache('get' + id, idvalue);
//     res.send('ID ok db' + JSON.stringify(value));
//   }
// })

app.use(
  "/graphql",
  expressGraphql({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);
app.listen(3000);