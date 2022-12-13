function verificarPreco() {
    let p_ant = Number(window.prompt('Qual era o preço anterior do produto?'))
    let p_atu = Number(window.prompt('Qual é o preço atual do produto?'))
    let res = window.document.getElementById('res')
    let valor = []

    res.innerHTML = '<p><h1>Analisando os valores informados</h1></p><br>'
    res.innerHTML += `O produto custava ${formatacaoBR(p_ant)} e agora custa ${formatacaoBR(p_atu)}.<br>`
    
    if (p_ant - p_atu < 0) { // Teve aumento de valor
        res.innerHTML += `Hoje o produto está mais caro.<br>`
        res.innerHTML += `O preço subiu ${formatacaoBR(p_atu - p_ant)} em relação ao preço anterior.<br>`
        res.innerHTML += `Uma variação de ${porcentual(p_ant, p_atu)}% para cima.`
    } else if (p_ant - p_atu > 0) { // Teve diminuição de valor
        res.innerHTML += `Hoje o produto está mais barato.<br>`
        res.innerHTML += `O preço caiu ${formatacaoBR(p_ant - p_atu)} em relação ao preço anterior.<br>`
        res.innerHTML += `Uma variação de ${porcentual(p_ant, p_atu)}% para baixo.`
    } else { // permaneceu o mesmo valor
        res.innerHTML += `Hoje o produto não teve alteração de preço.<br>`
    }
}

function formatacaoBR(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function porcentual(v_anterior, v_atual, precisao = 1) {
    if(v_anterior - v_atual < 0) { // teve aumento
        return (((v_atual - v_anterior)/v_anterior) * 100).toFixed(precisao).replace('.',',')
    } else if (v_anterior - v_atual > 0) { // teve diminuição 
        return (((v_anterior - v_atual)/v_anterior) * 100).toFixed(precisao).replace('.',',')
    } else {return '0'} // nao teve alteração do valor
}