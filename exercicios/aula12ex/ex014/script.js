function carregar() { // >> função chamada no HTML: "<body onload="carregar()">"

    // Instanciando ojetos p/ resgatar alguns atributos:
    var msg = window.document.getElementById('msg') // 'msg' é o id da primeira div HTML
    //var img = window.document.getElementById('imagem') // 'imagem' é o id da tag <img> HTML
    var img = window.document.querySelector('img#imagem')
    //var img = window.document.querySelector('div>img#imagem') // perfeito p/ documentar
    var data = new Date()

    // Atributos:
    var hora = data.getHours() // >> resgatando a hr de acesso do objeto data
    msg.innerHTML = `Agora são ${hora} hr.` // >> Informando a hr de acesso p/ o usuário

    //  hora = 19 // >> teste
    // Apresentando uma cor de fundo e a imagem de acordo c/ a hr de acesso:
    if (hora >= 0 && hora < 12) {
        img.src='foto-manha.png' // >> caminho da imagem
        window.document.body.style.background = '#745235' // >> valor da cor de fundo do body
    } else if (hora >= 12 && hora < 18) {
        img.src='foto-tarde.png'
        window.document.body.style.background = '#3f8fa5'
    } else {
        img.src='foto-noite.png'
        document.body.style.background = '#1b4f77'
    }
}
