//const http = require('http') - forma antiga 

//EsModule = import - forma atual

/*----------------------------------*/

//abaixo metodo para se criar API com rotas 

//http

//url

/*metodo http

GET- busca um recurso no back-end
POST- Cria um recurso no back-end
PUT- Atualiza um recurso no back-end
PATCH- Atualiza uma informação especifica de um recurso no back-end
DELETE- Delete um recurso no back-end
*/



import http from 'http'

import estadosCidades from './app.js'

let array = [] //criando array vazio

const server = http.createServer((request, response) =>{

    const {method, url} = request //faz a pergunta

    console.log(method); //imprime o metodo no terminal

    if (method === 'GET' && url === '/users') {
        
        return response
        .setHeader('content-type', 'application/json')
        .end(JSON.stringify(estadosCidades))
    }

    if (method === 'POST' && url === '/users') {
        
        array.push({
            id: 1515,
            nome:'Samantha',
            email:'samanthinha@gmail.com'
        })
    }



    return response.end('Deu certo') //envia a resposta
})

server.listen(3333)

//request/req solicita 
//responde/res devolve

//100-199 Resposta de informação 
//200-299 Resposta com sucesso
//300-399 Mensagem redirecionamento
//400-499 é um erro back-end
//500/599 erro no servidor  