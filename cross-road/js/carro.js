// let xCarros1 = 700;
// let xCarros2 = 700;
// let xCarros3 = 700;
let yCarros = [40,100,150,210,260,320];
let xCarros = [600,600,600,600,600,600]
let carSpeed = [0,1,1,0,0,0];

let comprimentoCarros = 50;
let larguraCarros = 40;


function showCars() {

    for (let i = 0; i < imgCarros.length; i++) {
    
        image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarros + 15, larguraCarros + 15);
    }

    // image(imgCarros[i], xCarros1, yCarros, comprimentoCarros, larguraCarros);
    // image(imgCarro2, xCarros2, 96, 60, 40);
    // image(imgCarro3, xCarros3, 150, 60, 40);
}


function carMov(){

    for (let i = 0; i < imgCarros.length; i++) {
        xCarros[i] -= carSpeed[i];

        if (xCarros[i] < -50) {
            xCarros[i] = 810
            
        }
    }
}
