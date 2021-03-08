function Tabuar(){
    // get elements
    let tabu = document.getElementById('nutab')
    let numero = Number(tabu.value)
    let text = document.querySelector('select#seltab')
    if (tabu.value.length == 0){
        alert('[ERRO] digite preencha o campo.')
        
    }
    else{
        text.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            text.appendChild(item)
    
     }
     
    }
    

}

