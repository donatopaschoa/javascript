function calcular() {
    let produto = window.prompt('Que produto você está comprando?')
    let custo = window.prompt(`Quanto custa ${produto} que você está comprando?`)
    let valor_dado = window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`)
    let troco = Number(valor_dado) - Number(custo)

    window.alert(`Você comprou ${produto} que custou ${formataMoedaBr(custo)}.\nDeu ${formataMoedaBr(valor_dado)} em dinheiro e vai receber ${formataMoedaBr(troco)} de troco.\nVolte sempre!`)
}

function formataMoedaBr(n) {
    return Number(n).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 
}