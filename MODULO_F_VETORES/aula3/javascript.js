/* REQUISITOS:            

div para gerar quadro branco no meio da tela;
input num entre número de 1 100;
input/button para adicionar o item a lista e na tela 
if (verificar se está vazio) and verificar se o número ultrapassou 100;
um espaço de lista utilizando o select > option;
Um button para finalizar e gerar as mensagens.

* quantidade de valores cadastrados;
* o maior valor do vetor;
* o menor valor do vetor;
* Soma de todos valores no vetor;
* A média do vetor: sum(vetor) / vetor.length 

*/

// função para somar:



function sum(vetor){
   let valores = vetor;
   return valores.reduce(function(a, b){
       return a + b;
   })
}

function min(vetor){
    let minimo = Math.min.apply(null, vetor);
    return minimo
}

function max(vetor){
    let maximo = Math.max.apply(null, vetor);
    return maximo
}

function mean(vetor){
    let media = sum(vetor) / vetor.length
    return media
}

let numtxt = document.getElementById('numtxt')
let number = Number(numtxt.value)
let table = document.getElementById('tab')
let list = []
let listp = []

function limited_number(num){
    if (Number(num) >= 1 && Number(num) <= 100){
        return true;
    }
    else{
        return false
    }
}

function listed(num, list){
    if (list.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}




function adicionar(){
    if (limited_number(numtxt.value) && !listed(numtxt.value, list))
        {
        list.push(Number(numtxt.value));  
        listp.push(list[0])
        c = 0
        let item = document.createElement('option');
        item.text = `Valor ${list} adicionado`;
        table.appendChild(item)
        list = []
        if (listp.length > 3){
            alert(listp)
        } 
        
    }
    
    

    else{
        alert(`[ERROR] Digite valores maiores que zero e que não sejam repetidos!`)
    }


}


