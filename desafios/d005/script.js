function conversor() {
    let num = window.prompt('Digite uma distância em metros (m)')
    let res = window.document.querySelector('div#res')
    let n = Number(num)

    res.innerHTML = `<h1>A distância de ${n.toFixed(2).replace('.',',')} metros, corresponde a...</h1><br>`
    res.innerHTML += `<strong>${dividindo(n, 1000)} quilômetros (Km)</strong><br>`
    res.innerHTML += `<strong>${dividindo(n, 100)} hectômetro (Hm)</strong><br>`
    res.innerHTML += `<strong>${dividindo(n, 10)} decâmetro (Dam)</strong><br>`
    res.innerHTML += `<strong>${dividindo(n,(1/10))} decímetro (dm)</strong><br>`
    res.innerHTML += `<strong>${dividindo(n, (1/100))} centímetro (cm)</strong><br>`
    res.innerHTML += `<strong>${dividindo(n, (1/1000))} milímetros (mm)</strong><br>`
}

function dividindo(n, dividendo) {
        let valor = n/dividendo
        if (0 < valor && valor < 100) {
            // formata para 3 casas decimais:
            return valor.toFixed(3).replace('.',',')
        } else if (valor < 10000) {
            // formata c/ 1 casa decimal:
            return valor.toFixed(1).replace('.',',')
        } else {
            // formata c/ 0 casa decimal:
            return valor.toFixed(0).replace('.',',')
        }
}