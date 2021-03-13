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

//function valor mínimo:
function min(vetor){
    let minimo = Math.min.apply(null, vetor);
    return minimo
}

//function valor max:
function max(vetor){
    let maximo = Math.max.apply(null, vetor);
    return maximo
}

//function: value mean:
function mean(vetor){
    let media = sum(vetor) / vetor.length
    return media
}

let numtxt = document.getElementById('numtxt')
let number = Number(numtxt.value)
let table = document.getElementById('tab')
let list = []


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
        let item = document.createElement('option')
        item.text = `Valor ${numtxt.value} adicionado`;
        table.appendChild(item)
        
                
                 
    }

    else{
        alert(`[ERROR] Digite valores maiores que zero e que não sejam repetidos!`)
    }
    numtxt.value = '';
    numtxt.focus();

}


function relatorio(){
    if (list.length == 0){
        alert('[ERROR] Você não pode gerar o relatório sem nenhum valor na lista!')
    }
    else{
        let writte = document.getElementById('relatorio');
        writte.innerHTML = ''
        writte.innerHTML += `O total de elementos na lista é ${list.length} <br>`;
        writte.innerHTML += `A soma dos elementos na lista é ${sum(list)} <br>`;
        writte.innerHTML += `O maior valor na lista é ${max(list)} <br>`;
        writte.innerHTML += `O menor valor na lista é ${min(list)} <br>`;
        writte.innerHTML += `A média dos valores na lista é ${mean(list)} <br>`;
    }

    


}

function resetar(){
    table.removeChild(table.childNodes[0])
    list.length -= 1;
}
