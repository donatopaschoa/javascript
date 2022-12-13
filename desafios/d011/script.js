function anobissexto() {
    let bissexto = false
    let ano = Number(window.prompt('Qual é ano que você quer verificar?'))
    let res = window.document.querySelector('div#res')

    //2020 foi um ano bissexto, logo, a cada 4 anos, é um ano bissexto, portanto:
    if ((2020 - ano)%4 == 0 ) { bissexto = true }

    if (bissexto) {
        res.innerHTML = `O ano de ${ano} <strong id="sim">É BISSEXTO</strong> <strong id="chek">&#10004;</strong>`
    } else { // &#x2716;
        res.innerHTML = `O ano de ${ano} <strong id="nao">NÃO É BISSEXTO</strong> <strong id="cros">&#x2716;</strong>`
    }
}