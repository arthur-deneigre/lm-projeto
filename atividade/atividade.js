const listaCursos = [25, 30, 50, 45, 15, 20]

let maisBarato = 0

let maisCustoso = 0

let soma = 0
//menor preço
function info(valor) {
    for (let cursoAtual = 0; cursoAtual < listaCursos.length; cursoAtual++) {

        if (listaCursos[cursoAtual] < listaCursos[maisBarato]) {

            maisBarato = cursoAtual

        }

    }
    return listaCursos[maisBarato]
}


console.log("o livro mais barato é " + info())

//maior preço
function info2(valor) {
    for (let cursoAtual = 0; cursoAtual < listaCursos.length; cursoAtual++) {

        if (listaCursos[cursoAtual] > listaCursos[maisCustoso]) {

            maisCustoso = cursoAtual
        }
    }
    return listaCursos[maisCustoso]
}

console.log("o livro mais caro é " + info2())
//media de preços

function info3() {
    for (let cursoAtual = 0; cursoAtual < listaCursos.length; cursoAtual++) {
        soma += listaCursos[cursoAtual] / listaCursos.length
    }
    console.log(`a media é de` + soma )
}
info3()



