
function setup() {
    createCanvas(400,700)
}


function draw() {
    background(imgFundo)
    showBird();
    showCanos();
    canosMov();
    verifyColisao();
}
