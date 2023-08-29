let yCanos = [650,0,150,210];
let xCanos = [600,600,600,600]
let canosSpeed = [6,6,6,6];

let comprimentoCanos = 80;
let larguraCanos = 100;



function showCanos() {

    for (let i = 0; i < imgCanos.length; i++) {
    
        image(imgCanos[i], xCanos[i], yCanos[i], comprimentoCanos + 15, larguraCanos + 15);
    }

}

function canosMov(){

    for (let i = 0; i < imgCanos.length; i++) {
        xCanos[i] -= canosSpeed[i];

        if (xCanos[i] < -20) {
            xCanos[i] = 610
            
        }
    }
}