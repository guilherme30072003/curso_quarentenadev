//Exercício 3
//Usando o while consegue exibir os números pares de até de 0 até 100? Pode ser usando document.write, alert você escolhe.
numero = 0
while (numero <= 100) {
    if (numero % 2 == 0) {
        document.write(numero + "<br>")
    }
    numero = numero + 1
}