function muda_cor(){
    let body = document.getElementById("bg");
    let rand = Math.floor(Math.random() * 6);

    let cores = ["#836FFF", "#6495ED", "#4682B4", "#008080", "#3639da", "#8b008b"];

    body.style.backgroundColor = cores[rand];
}

function cor_rand(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i=0; i<6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    console.log(cor);
    body.style.backgroundColor = cor;
}
