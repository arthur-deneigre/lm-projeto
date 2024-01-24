//var

//Explicação: Funciona globalmente , ou seja, eu posso declarar a variavel em qualquer parte do meu codigo

var exemplo1 = 10;

exemplo2 = 15;

console.log(exemplo2);

console.log(typeof exemplo2);

//================================================================================================================//

//let

//explicação: as variaveis let não podem ser usadas antes de ser declarada, pois seu escopo não permite serem elevadas ao topo

exemplo3 = 30;

console.log(exemplo3);

console.log(typeof exemplo3);

//================================================================================================================//

//const
//explicação: as declarações const não podem ser reatribuidas após a atribuição inicial e deve ser inicializada na mesma linha que foi declarada 

const status = "aluno aprovado!";

const nota1 = 7;
const nota2 = 4;
let aprovacao

if (status === "aluno aprovado!") {

    aprovacao = nota1 + nota2;
    console.log("parabens voce foi aprovado!");

}

//===============================================================================================================//

//template string 

const nome = "Bruno";
const cargo = "desenvolvedor";
const empresa = "SENAI";
const idade = 2005-2023;

console.log({nome},", ",{cargo}," e trabalha na empresa ",{empresa}," e tem ",{idade}," anos.");
