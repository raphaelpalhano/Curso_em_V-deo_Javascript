

/* 
Dias da semana no Javascript:

Domingo - 0
Segunda - 1
Terça - 2
Quarta - 3
Quinta - 4
Sexta - 5
Sábado - 6
*/

let agora = new Date()

let dia_semana = agora.getDay()

// Dia da semana é a variável que contém um valor, e dentro dos colchetes do switch você colocar a variável ou até uma expressão de soma
// Cada case é como se fosse uma representação de if, mas vocÊ coloca apenas o resultado caso a variável for 0 vai entrar nesse case...
switch(dia_semana){
    case 0:
        console.log("Domingo")
        break
        
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    
    case 3:
        console.log('Quarta-Feira')
        break
    
    case 4:
    console.log('Quinta-Feira')
    break

    case 5:
    console.log('Sexta-Feira')
    break

    case 6:
    console.log('Sábado')
    break

    default:
        console.log("ERRO: dia inválido!")
        break
        

}