//Exercício4
//Consegue descobrir uma outra fórmula de aleatoriedade que seja mais "justa" que a que usamos no exercício?
// Código base dessa aula: https://codepen.io/artdiniz/pen/OJVGRJj
function executarSorteio() {
    //numero_aleatorio = Math.round(Math.random() * 10)
    numero_aleatorio = Math.trunc(Math.random()*10+1)
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