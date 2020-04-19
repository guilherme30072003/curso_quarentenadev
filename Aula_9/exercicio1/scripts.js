//Exercício1
//Trocar o prompt que estavamos utilizando para pegar dados do usuário pelo input
// Código base dessa aula: https://codepen.io/felipedotcom/pen/GRpRJjq
function formataMoeda(numero) {
    return numero.toFixed(2).replace(".", ",")
}

function calcular() {
    distanciakm = inputDistancia.value
    tempomin = inputTempo.value
    valorcorrida = 2 + distanciakm * 1.4 + tempomin * 0.26
    botaoCalcular.innerHTML = "Total: R$" + formataMoeda(valorcorrida)
}