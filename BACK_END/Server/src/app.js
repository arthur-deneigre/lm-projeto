import estadosCidades from './estados_cidades.js'

// //Fuction 01
function getListaDeEstados(sigla) {
   
    const uf = sigla.estados.map((estados) =>{return estados.sigla;})

    console.log("Uf", uf);

    
   console.log(`quantidade: `, estadosCidades.estados.length);
        
}
      
 getListaDeEstados(estadosCidades)

// //Fuction 02
// function getDadosEstado(valor) {

//     chave ="sigla"
//     lista= estadosCidades.estados
    
//     for(let i = 0; i < lista.length; i++){
//         const estado = lista[i]
//         if(estado[chave] === valor){
//              const estadoSemCidades = {
//                 uf: estado.sigla,
//                 nome: estado.nome,
//                 capital: estado.capital,
//                 regiao: estado.regiao
//             };
//             console.log( estadoSemCidades); 

//         }
       
//     }
   
// }
// getDadosEstado("BA"); 

// //Fuction 03

// function getCapitalEstado(valor) {

//     chave ="sigla"
//     lista= estadosCidades.estados
    
//     for(let i = 0; i < lista.length; i++){
//         const estado = lista[i]
//         if(estado[chave] === valor){
//              const filtrarCapital = {
//                 uf: estado.sigla,
//                 nome: estado.nome,
//                 capital: estado.capital
//             };
//             console.log(filtrarCapital); 

//         }
       
//     }
   
// }
// getCapitalEstado("MT"); 

// //Fuction 04

// function getEstadosRegiao(valor) {
    
//     lista = estadosCidades.estados
//     chave = "regiao"

//     for (let i = 0; i < lista.length; i++) {
//         const estado = lista[i];
//         if(estado[chave] === valor){
//             const filtraRegiao = {
//                uf: estado.sigla,
//                nome: estado.nome
//            };
          
//            console.log(filtraRegiao); 

//        }
//     }

//     return null;
// }

// getEstadosRegiao("Sul");

// //Fuction 04 Usando MAP

// function getEstadosRegiaot02(regiao) {
    
//     const listaEstados = estadosCidades.estados.filter(estado => estado.regiao === regiao);

//     const filtrando = {
//         regiao: regiao,
//         estados: listaEstados.map(estado => ({
//             uf:estado.sigla,
//             nome: estado.nome,
//             capital: estado.capital
//         }))
//     };
    
//     console.log(filtrando);

//     return estadosCidades;
// }

// getEstadosRegiaot02("Sul")

// //fuction 05

// function getCapitalPais() {
//     const listaEstado = estadosCidades.estados.filter(estado => estado.capital_pais)

//     const listando = {
//         capitais:
//             listaEstado.map(estado => ({
//                 capital_atual: estado.capital_pais.capital,
//                 uf: estado.sigla,
//                 descricao: estado.nome,
//                 capital: estado.capital,
//                 capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
//                 capital_pais_ano_fim: estado.capital_pais.ano_fim

//             }))
// }

//  console.log(listando);
//     }
    
// getCapitalPais()

// //Fuction 06

// function getCidades(valor) {

//     chave ="sigla"
//     lista= estadosCidades.estados
    
//     for(let i = 0; i < lista.length; i++){
//         const estado = lista[i]
//         if(estado[chave] === valor){
//              const filtrandoCidades = {
//                 uf: estado.sigla,
//                 nome: estado.nome,
//                 cidades: estado.cidades
//             };
//             console.log(filtrandoCidades); 

//         }
       
//     }
   
// }
// getCidades("BA");

export default getListaDeEstados
