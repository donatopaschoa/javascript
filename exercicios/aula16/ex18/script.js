// Declarando os elementos:
let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')

// Declarando um vetor global:
let valores = []

// Sub-rotinas: ---------------------
function isNumero(n) {
    if(1 <= Number(n) && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lst) {
    if(lst.indexOf(Number(n)) != -1) {
        return true // consta no vetor
    } else {
        return false // não consta no vetor
    }
}

function consta(n, vetor1) {
    if(vetor1.indexOf(Number(n)) == -1) {
        return false // não encontrou no vetor
    } else {
        return true // encontrou
    }
}

function createSelect(texto, valor, nameSelect) {
    let item = window.document.createElement('option') // cria elemento option
    item.text = texto // texto do option q será lido pelo usuário
    item.value = valor // valor atribuído p/ passagem de parâmetro via get/post
    nameSelect.appendChild(item) // adicionando o option c/ seua atributos 
}

//--------------------------------------------

// Funções principais: -----------------------
function analisar() {
    // Entrarão no "select" se forem números e não pertencentes à listagem
    if(isNumero(num.value) && !inLista(num.value, valores) ){//!(consta(num.value, valores))) {
        valores.push(Number(num.value))
        createSelect(`Valor ${num.value}`, num.value, lista)
        res.innerHTML = "" // limpando o campo de informações da div "res" gerado pela função "finalizar()"
        //window.alert('Estou aqui') // teste
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // limpando a variável "num" digitada pelo usuário
    num.focus() // persistindo o mouse no campo "num" p/ o usuário continuar digitando

}

function finalizar() {
    // Determinando a qtde total d números cadastrados:
    let total = valores.length

    let media = 0
    let soma = 0
    let menor = valores[0]
    let maior = valores[0]
    for(let pos in valores) {
        // Det. o maior e menor valor:
        if (valores[pos] > maior) {maior = valores[pos]}
        if (valores[pos] < menor) {menor = valores[pos]}
        
        // Somando todos os elementos:
        soma += valores[pos]
    }
    // Cálculo da média:
    media = (soma/total).toFixed(3)

    if (total == 0) {
         window.alert('Adicione valores antes de finalizar!')
        } else {
            
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
            res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
            res.innerHTML += `<p> Somando todos os valores temos ${soma} </p>`
            res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`

            // 
    }
}