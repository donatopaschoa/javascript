function reajustar() {
    let funcionario = window.prompt(`Qual o nome do funcionário?`)
    let salario = window.prompt(`Qual é o salário de ${funcionario}?`)
    let porcentagem = window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`)
    let s = Number(salario)
    let p = Number(porcentagem)
    let res = window.document.getElementById('res')
    
    res.innerHTML = `<p><h1>${funcionario} recebeu um aumento salarial!</h1></p>`
    res.innerHTML += `O salário atual era ${formatacaoBR(s)}.<br>`
    res.innerHTML += `Com aumento de ${p}%, o salário vai aumentar ${formatacaoBR(s * (p/100))} no próximo mês.<br>`
    res.innerHTML += `E a partir daí, ${funcionario} vai passar a ganhar ${formatacaoBR((1 + p/100) * s)}.`
}

function formatacaoBR(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

