function geratabuada() {
    let num = window.document.getElementById('txt_n')
    let tab = window.document.getElementById('sel_tab')

    // Validação:
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {

        let n = Number(num.value)
        tab.innerHTML = ""
        let i = 1

        while (i <= 10) {
            let item = window.document.createElement('option')
            item.text = `${i} x ${n} = ${i * n}`
            tab.appendChild(item)
            i++
        }
    }
}
/*
Testes:
let tabuada = -8

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${tabuada} = ${i * tabuada}`);
}

for (let i = 1; i <= 10; i++) {

    let item = window.document.createElement('option')
    item.text = `${i} x ${n} = ${i * n}`
    tab.appendChild(item)
}

*/