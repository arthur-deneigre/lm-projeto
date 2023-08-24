let yMascote = 360;
let xMascote = 50;
let myScore = 0;

function showMascote() {
    image(imgMascote, xMascote, yMascote, 60, 60);
}

function incluirPontos() {
    text(myScore, 20, 25)
    fill(color(255,0,0))
    textSize(21)

    if (yMascote < 0) {
        yMascote = 360
        myScore ++
    }
}

function mascoteMov(){
    if (keyIsDown(UP_ARROW)) {
        yMascote -=6;
        
        imgMascote = loadImage("img/meu/costa.png");
    }
    if (keyIsDown(DOWN_ARROW)) {
        yMascote +=6;
        imgMascote = loadImage("img/meu/frente.png");
    }
    if (keyIsDown(LEFT_ARROW)) {
        xMascote -=6;
        imgMascote = loadImage("img/meu/esquerda.png");
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xMascote +=6;
        imgMascote = loadImage("img/meu/direita.png");
    }
}