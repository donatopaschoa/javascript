function verificar() {
    let aluno = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${aluno}`))
    let n2 = Number(window.prompt(`Segunda nota de ${aluno}`))
    let res = window.document.querySelector('div#res')
    
    let situacao = analisar(n1, n2)

    res.innerHTML = `<h1>Analisando a situação de ${aluno}</h1><br>`
    res.innerHTML += `Com as notas ${n1} e ${n2}, a <strong> média é ${((n1 + n2)/2).toFixed(2).replace('.',',')}</strong><br>`
    res.innerHTML += `Com média ${analisar(n1, n2)}`
}

function analisar(n1, n2) {
    let media = (n1 + n2) / 2

    if (media < 3) {return 'abaixo de 3,0, o aluno está <strong id="repr">REPROVADO</strong>'} 
    else if (media <= 6) {return 'entre 3,0 e 6,0, o aluno está em <strong id="rec">RECUPERAÇÃO</strong>'} 
    else {return 'acima de 6,0, o aluno está <strong id="apro">APROVADO</strong>'}
}
