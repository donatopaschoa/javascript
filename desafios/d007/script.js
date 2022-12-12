let dolarHJ = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
let d = Number(dolarHJ)

function cotacao() {
    let carteira = window.prompt('Quanto R$ você tem na carteira?')
    let res = window.document.getElementById('res')

    let c = Number(carteira)

    let valor = parseInt(c/d) // parte inteira despresando após a vírgula
    let sobrou = c - (valor * d) // sobras que não deu p/ comprar um dólar

    res.innerHTML = `<p>Dos seus ${formatacaoBR(c)} (reais) na carteira e o dólar cotado hoje a ${formatacaoBR(d)} (reais),`
    res.innerHTML += `você vai conseguir comprar ${formatacaoUS(valor)} (dólares) `

    if (sobrou != 0) {
        res.innerHTML += `e sobrará ${formatacaoBR(sobrou)} (reais)</p>`
    }
}

function formatacaoUS(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
}

function formatacaoBR(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}