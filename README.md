# rest-api-symfony
servidor redis - local
acesso http://localhost:3000/graphql


TESTE:

# query{
#   users{
#     id,username
#   }
# }

# query{
#   user(id:14){
#     msg,
#     usuario{id,username}
#   }
# }

# mutation{
#   createUser(username:"maria",password:"123"){
#     msg,
#     usuario{id,username}
#   }
# }

# mutation{
#   loginUser(username:"maria",password:"123"){
#     msg,
#     token,
#     usuario{id}
#   }
# }

# mutation{
#   recuperarUser(username:"maria"){
#     msg
#   }
# }

# query{
#   produtos{
#     id,titulo,descricao
#   }
# }

# query{
#   produto(id:6){
#     msg,
#     produto{id,titulo,descricao,preco}
#   }
# }

# mutation{
#   createProduto(titulo:"Camisetass",descricao:"descriçao",preco:12.89){
#     msg,
#     produto{id,titulo,descricao,preco}
#   }
# }

# mutation{
#   updateProduto(id:3,titulo:"nome do produto ed",descricao:"descriçao ed",preco:12.99){
#     msg,
#     produto{id,titulo,descricao,preco}
#   }
# }

# mutation{
#   deleteProduto(id:12){
#     msg
#   }
# }




  

