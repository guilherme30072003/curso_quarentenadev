//Exercício1
//Será que usando JavaScript você consegue imprimir ou seja abrir a janela de impressão de documento e salvar seu certificado que fizemos no codepen em pdf ou até imprimir mesmo?
//Se você conseguiu imprimir seu certificado, percebeu que os links não aparecem. Será que você consegue deixar eles aparecendo igual na imagem:
// Código base dessa aula: https://codepen.io/artdiniz/pen/oNjvYJY
function gerar() {
    contador = 0
    while (contador <= 1000000) {
        html_certificado = emitirCertificado(inputNome.value)
        contador = contador + 1
    }
    lista_com_links_dos_programas = [
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree/master/Aula_1">Aula_1</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree/master/Aula_2">Aula_2</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_3">Aula_3</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_4">Aula_4</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_5">Aula_5</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_6">Aula_6</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_7">Aula_7</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_8">Aula_8</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_9">Aula_9</a>`,
        `<a href="https://github.com/guilherme30072003/curso_quarentenadev/tree///master/Aula_10">Aula_10</a>`,
    ]

    contador = 0
    link_formatado = ""
    while (contador < lista_com_links_dos_programas.length) {
        link_para_formatar = lista_com_links_dos_programas[contador]
        link_formatado = link_formatado + `<li>${link_para_formatar}</li>`
        contador = contador + 1
    }
    imprimir_certificado = `
    <button onclick="print()"> 
        Imprimir Certificado
    </button>
    `
    document.body.innerHTML = `
    ${html_certificado}
    <ol>
    ${link_formatado}
    </ol>
    ${imprimir_certificado}
    `
}