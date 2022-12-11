function converter() {
    let temp = window.prompt('Digite uma temperatura em ºC (Celsius')
    let res = window.document.querySelector('div#res')
    t = Number(temp)

    res.innerHTML = `<h2>A temperatura de ${t} ºC, corresponde a...</h2>`
    res.innerHTML += `<p>${celsParaKe(t)}ºK (Kelvin)</p>`
    res.innerHTML += `<p>${celsParaFa(t)}ºF (Fahrenheit)</p>`
}

function celsParaKe(t = 0) {
    // 0 °C + 273,15 = 273,15 K >> Cels p/ Kelvin
    return (t + 273.15).toFixed(2)
}

function celsParaFa(t = 0) {
    // (0 °C × 9/5) + 32 = 32 °F >> Cels p/ Fahrenheit
    return ((t * 9/5) + 32)
}