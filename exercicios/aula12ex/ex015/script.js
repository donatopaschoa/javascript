function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (txtano.value.length == 0 || Number(txtano.value) > ano) {
        // se o usuário não digitou OU o ano digitado for um ano "futuro" (acima do atual)
        window.alert('[ERRO], verifique os dados e tente novamente!')

    } else {
        var idade = ano - Number(txtano.value)
        var genero = ''
        var radiosexo = window.document.getElementsByName('radsex') // obj radio SOMENTE é instanciado pelo name
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (radiosexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (radiosexo[1].checked) { // esta verif. não seria necessária pois há somente 2 situações
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        // Configuração final p/ saída de dados:
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)

        
    }

    /*

    OBS: -----------------------
    no cód. HTML não há manipulação da elemento "value" do objeto "radio"
    Neste caso, trabalharemos com a posição do elemento "name" selecionado
    name='radsex', portanto, temos:
    radsex[0].checked >> id='masc'
    radsex[1].checked >> id='fem'

    Testes: ----------------------
    res.innerHTML = `Ano = ${ano}, ano preenchido = ${txtano.value} <br>`
    res.innerHTML += `Valor do radiosexo[0] =  ${radiosexo[0].checked} <br>`
    res.innerHTML += `Valor do radiosexo[1] =  ${radiosexo[1].checked}`

    */
}