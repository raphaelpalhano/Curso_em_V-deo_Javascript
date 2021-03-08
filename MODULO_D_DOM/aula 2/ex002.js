function verificar(){
    let minha_nacio = window.document.querySelector('div#result')
    let pais = window.document.getElementById('nacio')
    let nacionalidade = String(pais.value)
    if (nacionalidade == 'Brasil'){
        minha_nacio.innerHTML = 'Brasileiro'
    }
    else if (nacionalidade == 'EUA'){
        minha_nacio.innerHTML = 'Americano'
    }
    else{
        minha_nacio.innerHTML = 'Estrangeiro'
    }
   
}