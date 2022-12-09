let amigo = { nome: 'José', 
            sexo: 'M', 
            peso: 85.4, 
            engordar(p=0){this.peso += p} }


// antes:
console.log(`${amigo.nome} pesa ${amigo.peso}`) // José pesa 85.4

// a variável peso será acrescentada em p kilos pela função engordar(p):
amigo.engordar(2) 

// depois:
console.log(`${amigo.nome} pesa ${amigo.peso}`) // José pesa 87.4


