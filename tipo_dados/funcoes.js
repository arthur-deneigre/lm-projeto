//funçoes declaradas

//sem parametro
function mediterraneo() {
    
    console.log("Aprendendo funções")
}

mediterraneo()


//com parametro
function nome(texto) {
    
    console.log(`ola meu nome é ${texto}`)
}

nome('Arthur Bueno')


//função com mais de um parametro
function somar(num1, num2) {
    
    return num1 + num2
}

console.log(somar("10","10"))


//função com mais de um parametro
function multiplicar(num1, num2) {
    
    return num1 * num2
}

console.log (multiplicar(somar("3,3", "7,5")))

// //função com retorno
 function subtrair() {
    
    const substracao = 10 - 3
    return substracao
 }

console.log(subtrair())


//explicando a posição dos argumentos

function info(nome, idade) {
    
    return `Meu nome é  ${nome}` + ` minha idade é  ${idade}`
}

//posição correta
console.log(info("Bueno",20))

//posição incorreta
console.log(info(20, "Bueno"))



const somando = function(numero1, numero2){ return numero1 + numero2}

console.log(somando(5,2))


//arrow function

//com um parametro
const funcaoSeta = nome => 'ola, meu nome é ${nome}'

console.log(funcaoSeta())

//com mais de um parametro
const outraSoma = (num1,num2) => {num1 + num2}

console.log(funcaoSeta(4,3))