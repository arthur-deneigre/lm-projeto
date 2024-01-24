//criar requisição em json

const alunos = require("./aluno.json")
console.log(alunos)
console.log(typeof(alunos))

const alunoEmString = JSON.stringify(alunos)

console.log(typeof(alunoEmString))


function encontrar(lista, chave, valor){
    for (let i = 0; i < array.length; i++) {
        const clientes = lista[i];
        if (clientes[chave] === valor){
            return clientes;
        }
    }
    return null;
}

console.log(encontrar(clientes, "apartamento", none))


//

function encontrar(lista, chave, valor) {

    
}