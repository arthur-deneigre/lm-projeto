
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
}

