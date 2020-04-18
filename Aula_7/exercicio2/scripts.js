//Exercício2
//O Art desafiou você a não deixar o usuário digitar um número maior que 10, caso ele digite um maior, dizer que ele não pode e pedir para digitar um novo número.
// Código base dessa aula: https://codepen.io/artdiniz/pen/OJVGRJj
function executarSorteio() {
    numero_aleatorio = Math.trunc(Math.random() * 10+1)
    console.log(numero_aleatorio)

    invalido = true
    while (invalido) {
        numero_digitado = prompt("Digite um número (1-10)")

        invalido = (numero_digitado < 1 || numero_digitado > 10)

        if (invalido) {
            alert("Valor inválido")
        }
    }

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