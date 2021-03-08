
function Tabuar(){
    let numInput = document.getElementById('nutab')
    let tabuada = document.getElementById('seltabu')
    let numero = Number(numInput.value)
    if (numInput.value.length == 0){
        alert('[ERROR] Preencha o campo de texto com um número!')
    }
    else{
        tabuada.innerHTML = ''
       
        c = 1
        while ( c < 10){
            let item = document.createElement('option')
            item.text = `${numero} X ${c} = ${numero * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }
    }

}