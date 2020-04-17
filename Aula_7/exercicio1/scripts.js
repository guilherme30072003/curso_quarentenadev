//Exercício1
//O Paulo desafiou vocês a trocar o estilo da mensagem de você ganhou ou você perdeu
// Código base dessa aula: https://codepen.io/artdiniz/pen/OJVGRJj

function executarSorteio() {
    numero_aleatorio = Math.round(Math.random() * 10)
    console.log(numero_aleatorio)
    numero_digitado = prompt("Digite um número")

    //on css: font-weight ; on js: fontWeight
    if (numero_digitado == numero_aleatorio) {
        paragrafoResultado.style.backgroundColor = "Green"
        paragrafoResultado.style.fontWeight = "bolder"
        paragrafoResultado.innerHTML = "Você ganhou! <img src = 'https://cdn4.iconfinder.com/data/icons/emoji-18/61/13-512.png'/>"
    }
    if (numero_digitado != numero_aleatorio) {
        paragrafoResultado.style.backgroundColor = "Red"
        paragrafoResultado.style.fontWeight = "bolder"
        paragrafoResultado.innerHTML = "Tente novamente <img src = 'https://cdn4.iconfinder.com/data/icons/emoji-18/61/14-512.png'/>"
    }

}