function descontar() {
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = window.prompt(`Qual o preço do ${produto}?`)
    let res = window.document.querySelector('div#res')
    let p = Number(preco)

    res.innerHTML = `<p><h1>Calculando desconto de 10% para ${produto}</h1></p>`
    res.innerHTML += `O preço original era ${formatacaoBR(p)}.<br>`
    res.innerHTML += `Você acaba de ganhar ${formatacaoBR((.1*p))} de desconto (-10%).<br>`
    res.innerHTML += `No fim você vai pagar ${formatacaoBR((.9*p))} no produto ${produto}.<br>`
}

function formatacaoBR(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}