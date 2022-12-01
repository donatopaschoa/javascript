function contar() {
    var inicio = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var passo = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')

    //res.innerHTML = `início = ${inicio.value}, fim = ${fim.value}, passo = ${passo.value} <br>` // teste 
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML += 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // Evitando valores errados do Passo:
        if (p <= 0) {
            window.alert('Impossível contar, considerando Passo = 1')
            p = 1
        }

        //res.innerHTML += `início = ${i}, fim = ${f}, passo = ${p} <br>` // teste 

        res.innerHTML = ""

        // Qdo o início é menor q o final: contagem crescente
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else{
            // Qdo o início é maior ou igual q o final: contagem decrescente 
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449} ` // >> ok, entre APÓSTROFES
                }
        }
        // Fig da bandeirinha no final:
        res.innerHTML += `\u{1F3C1} `

    }  
}