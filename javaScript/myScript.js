var number = 1;

function trocarFrase() {
    number = number + 1;
    var fraseAtual = document.getElementById("frase");
    fraseAtual.style.transition = "2s";
    fraseAtual.style.marginLeft = "70px";
    fraseAtual.style.color = "red";
    if (number % 2 == 0) {
        var fraseAtual = document.getElementById("frase");
        fraseAtual.innerHTML = "Voltar a página principal";
    } else {
        var fraseAtual = document.getElementById("frase");
        fraseAtual.innerHTML = "Computadores na Segunda Guerra";
        fraseAtual.style.transition = "2s";
        fraseAtual.style.marginLeft = "0px";
        fraseAtual.style.color = "white";
    }
}
