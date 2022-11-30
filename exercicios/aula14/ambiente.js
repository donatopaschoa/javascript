/*
Os 3 modos abaixo são iguais:

// 1) Repetição c/ teste no início: -----
var c = 1

while (c <= 5) {
    console.log(c)
    c++
}

// 2) Repetição com teste no final: -----
do {
    console.log(c)
    c++
} while (c <= 5)
*/

// Repetições com controle: -------------
console.log('Vai começar')
for(var c = 1; c <= 5; c++) {
    console.log(c)
}