
// Função que será executada quando a div for clicada
function changeText() {
    var div = document.getElementById("borderDemo");
    div.textContent = "Clicado!";
}

// Adiciona um evento de clique à div
var divElement = document.getElementById("borderDemo");
divElement.addEventListener("click", changeText);

