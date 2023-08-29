let yBird;
let xBird;
let myScore = 0;
let colisao = false;


function verifyColisao() {

    for(let i = 0; i < imgCanos.length; i++) {
    
        colisao = collideRectCircle(xCanos[i] + 10, yCanos[i] + 10, 
            comprimentoCanos + 1,larguraCanos + 1, xBird + 42, yBird + 29, 20);
    
    print('Colisão acontecendo', colisao)

        if (colisao) {
        (yBird < 0) 
        xBird = 50
        yBird = 360
        myScore = 0
        }
    }
}

function showBird() {
    image(imgBird, xBird, yBird, 80, 70);
}

function mascoteMov(){
    if (keyIsDown(UP_ARROW)) {
        yBird -=3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yBird +=3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xBird -=3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xBird +=3;
    }
}