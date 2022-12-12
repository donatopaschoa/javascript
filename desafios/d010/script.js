function bhaskara() {
    let a = Number(window.prompt(`Qual é o valor de a?`))
    let b = Number(window.prompt(`Qual é o valor de b?`))
    let c = Number(window.prompt(`Qual é o valor de c?`))
    let res = window.document.querySelector('div#res')

    res.innerHTML = `<p><h1>Resolvendo Bhaskara</h1></p>`
    res.innerHTML += `A equação atual é `
    res.innerHTML += `<strong>${a}x<sup>2</sup> + </strong>`
    res.innerHTML += `<strong>${b}x + </strong>`
    res.innerHTML += `<strong>${c} = 0 </strong><br>`

    res.innerHTML += `O cálculo realizado será <strong>&Delta; = </strong>`
    res.innerHTML += `<strong>${b}<sup>2 </sup></strong>`
    res.innerHTML += `<strong>- 4 . ${a} </strong>`
    res.innerHTML += `<strong>. ${c}</strong><br>`

    res.innerHTML += `O valor calculado foi <strong>&Delta; = </strong>`
    res.innerHTML += `<strong>${(b**2 -4*a*c)}</strong>`
}
