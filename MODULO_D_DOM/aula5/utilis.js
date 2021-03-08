function carregar(){
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let agora = new Date()
let hora = agora.getHours() 

if (hora >= 0 && hora < 12){
    //alert('Ainda é de manhã!')
    msg.innerHTML = `Agora são ${hora} horas.`
    img.src = '/manha.png'
    document.body.style.background = '#e2cd9f'
}
else if ( hora > 12 && hora <= 18){
   // alert('Ainda é de tarde!')
    msg.innerHTML = `Agora são ${hora} horas.`
    img.src = '/tarde.png'
    document.body.style.background = '#b9846f'
}
else{
    //alert('Já é de noite')
    msg.innerHTML = `Agora são ${hora} horas.`
    img.src = '/noite.png'
    document.body.style.background = '#515154'

}


}
