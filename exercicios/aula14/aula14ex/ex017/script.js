function geratabuada() {
    let tabuada = window.document.getElementById('txt_n')
    let resultado = window.document.getElementById('txa_t')

    //resultado.innerHTML = `Tabuada do ${t}` // teste

    // Validação:
    if (tabuada.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {

        let t = Number(tabuada.value)
        resultado.innerHTML = ""

        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `${i} x ${t} = ${i * t} \n`
        }
    }
}
/*
Testes:
let tabuada = -8

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${tabuada} = ${i * tabuada}`);
}
*/