function somando(){
    let tm1 = window.document.getElementById("number2")
    let tm2 = window.document.getElementById("number2")
    let mensagem = window.document.getElementById("msg")
    let num1 = Number(tm1.value)    
    let num2 = Number(tm2.value)
    let som = num1 + num2
   
    mensagem.innerHTML = `O resultado da soma é ${som}` 

}   