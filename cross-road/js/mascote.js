let yMascote = 360;
let xMascote = 50;
let myScore = 0;
let colisao = false; 

function verifyColisao() {

    for(let i = 0; i < imgCarros.length; i++) {
    
        colisao = collideRectCircle(xCarros[i] + 10, yCarros[i] + 10, 
            comprimentoCarros + 1,larguraCarros + 1, xMascote + 42, yMascote + 29, 20);
    
    print('Colisão acontecendo', colisao)

        if (colisao) {
        (yMascote < 0) 
        xMascote = 50
        yMascote = 360
        myScore = 0
        }
    }
}
function showMascote() {
    image(imgMascote, xMascote, yMascote, 80, 70);
}

function incluirPontos() {
    text(myScore, 20, 25)
    fill(color(255,0,0))
    textSize(21)

    if (yMascote < 0) {
        yMascote = 360
        xMascote = 50
        myScore ++
    }
}

function mascoteMov(){
    if (keyIsDown(UP_ARROW)) {
        yMascote -=3;
        
        imgMascote = loadImage("img/meu/cima.png")
    }
    if (keyIsDown(DOWN_ARROW)) {
        yMascote +=3;
        imgMascote = loadImage("img/meu/baixo.png");
    }
    if (keyIsDown(LEFT_ARROW)) {
        xMascote -=3;
        imgMascote = loadImage("img/meu/esquerdo.png");
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xMascote +=3;
        imgMascote = loadImage("img/meu/direita.png");
    }
}
