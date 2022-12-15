import * as funcoesGerais from './funcoesGerais.js';
function formatar() {
    let n = Number(window.prompt('Digite um número inteiro'))
    let res = window.document.querySelector('div#res')

    //res.innerHTML = `O número ${n} formatado em real = ${formatacaoBR(n)}`
    res.innerHTML = `O número ${n} formatado em real = ${funcoesGerais.formatacaoBR(n)}`
}
/*
function formatacaoBR(n) {
    return n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
*/