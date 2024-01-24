const cliente = require("./clientes.json");

function encontrar(cliente){
    return cliente.filter((lista) => {
    return(
        lista.endereco.apartamento === true && lista.endereco.complemento
    )
    })

}

const filtro = encontrar(cliente)
console.log(filtro);