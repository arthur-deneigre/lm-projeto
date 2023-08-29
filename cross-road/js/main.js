
//funçaõ setup define configuração largura(width) e altura(heigt)
function setup() {
    createCanvas(700,400)
}
function draw() {
    background(imgStreat);
    //image manipula o objeto no eixo X e Y, largura(width) e altura(heigt)
    showMascote();
    showCars();
    carMov();
    mascoteMov();
    incluirPontos();
    verifyColisao();
    // circle(xMascote + 42, yMascote + 29, 20);
    // rect(xCarros[4] + 10, yCarros[4] + 10, comprimentoCarros + 1,larguraCarros + 1);
}
