function mode() {

    const html = document.documentElement
    html.classList.toggle("escuro")

    const img = document.querySelector(".profile img")

    if(html.classList.contains("escuro")) {
        document.body.style.backgroundImage="url('./img/abbr-escuro.png')"
        img.setAttribute("src", "././img/logo2.jpg");
        
    } else {
        document.body.style.backgroundImage="url('./img/abbr-claro.png')"
        img.setAttribute("src", "././img/logo1.jpg")
    }
    console.log(html)
}

const btn = document.getElementById('btn');
let movimentar = false;

btn.addEventListener('click', () => {
    if (movimentar) {
        btn.style.left = '0';
    } else {
        btn.style.left = '55px'; // Ou a quantidade desejada de movimento
    }
    movimentar = !movimentar;
});




