
let fclick = document.getElementById("H")
fclick.addEventListener('click', clicou)
 function clicou(){
    // essa função está diretamente ligada a div ONCLICK=nome_da_função
    fclick.style.background = 'red'
    fclick.innerText = 'clicou'
}

let mov = window.document.getElementById('HF')
mov.addEventListener('mousemove', mover)
 function mover(){
    mov.style.background = 'green'
    mov.style.color = 'pink '
    mov.innerText = 'movendo'
    
}