let nome = prompt('Digite seu nome')

//typeof mostra o tipo de dado
console.log(nome, typeof nome)

let nota01 = prompt('Digite a primeira nota:')
console.log(nota01, typeof nota01)

nota01 = parseFloat(nota01)
console.log(nota01, typeof nota01)

let nota02 = parseFloat ( prompt('Digite a segunda nota:'))
let soma = nota01 + nota02
console.log(nota02, typeof nota02)

console.log(nota01 + nota02)

//console.log(Math.PI)

document.getElementById('resultado').innerHTML = "<strong>Nome:</strong> " + nome + " <strong>Nota 1:</strong> " + nota01 + " <strong>Nota 2:</strong> " + nota02 + " <strong>Soma das Notas:</strong> + " + soma 

document.getElementById('resultado2').innerHTML = ` 
<strong>
    Nome: ${nome}
    Nota 01: ${nota01}
    Nota 02 : ${nota02}
    Soma: ${soma}
</strong>`