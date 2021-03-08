/*

EXEMPLOS DE CONVERSÕES
let numero_1 =  Number(window.prompt("Digite o primeiro número: "))
let numero_2 = Number(window.prompt("Digite o segundo número: "))
let num_3 =  numero_1 + numero_2
alert("A soma dessa adição é " + String(num_3) ) */

/* formatando

let numero_1 =  Number(window.prompt("Digite o primeiro número: "))
let numero_2 = Number(window.prompt("Digite o segundo número: "))
let num_3 =  numero_1 + numero_2
alert(`A soma dessa adição é ${String(num_3)} `)
*/ 

// Escrevendo na tela e usando atribuições:
let nome = prompt("Qual seu nome? ")
document.writeln(`<strong>O nome ${nome.I} possui ${nome.length} letras!<strong><br>`)
document.writeln(`<strong>O nome em maiusculo ${nome.toLocaleUpperCase()} o nome em minusculo: ${nome.toLowerCase()}<strong>`)


n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 220,33' // convertendo para real

// convertendo para o formato de dollar:
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 220,33'