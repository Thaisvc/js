//NUMERO PODE SER DECLARADO ASSIM
const peso1 = 1.0
// OU ASSIM
const peso2 = Number ('2.0')

console.log(peso1, peso2)

//USA SE 'Number.isInteger' PARA SABER SE O VALOR PASSADO DE PESO1 É UM INTEIRO OU NAO
// RETORNANDO TRUE PARA VERDADEIRO E FALSE PARA FALSO
console.log(Number.isInteger(peso1))

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / ( peso1 + peso2)
// O COMANDO toFixed E USADO PARA CASA DECIMAIS O 2 É O VALOR PASSADO PARA ELE
console.log (media.toFixed(2))
// toString RETORNA O VALOR EM STRING/O 2 FAZ ELE SE TRANSFORMA EM UM VALOR BINARIO
console.log (media.toString(2))
// MOSTRA O TIPO TYPEOF
console.log (typeof media)


