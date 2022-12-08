let frase = null;
let autor = null;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const campoFrase = document.getElementById("exibeFrase");
    const campoAutor = document.getElementById("exibeAutor");
    const botaoMudaFrase = document.getElementById("botaoNovaFrase");

    fazFetch(campoFrase, campoAutor);

    botaoMudaFrase.addEventListener("click", () => {
        campoAutor.innerText = "";
        campoFrase.innerText = "A medida do amor é amar sem medida.";
        campoFrase.innerText = "O amor não se vê com os olhos mas com o coração.";
        campoFrase.innerText = "Amor é uma palavra que significa muito, mas nem metade do que eu sinto por você.";
        campoFrase.innerText = "O amor é a poesia dos sentidos. Quando existe, existe para todo o sempre e aumenta cada vez mais.";
        campoFrase.innerText = "Só com a agonia da despedida somos capazes de compreender a profundidade do nosso amor.";

        fazFetch(campoFrase, campoAutor)
    });
}

async function fazFetch(campoFrase, campoAutor) {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    
    frase = result.data[0].citacaoText;
    autor = result.data[0].citacaoAuthor;

    campoFrase.innerText = frase;
    campoAutor.innerText = autor;
}