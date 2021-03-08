function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let txano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (txano.value.length == 0 || txano.value > ano){
        window.alert("[ERROR]: Verifique os dados e tente novamente!")

    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(txano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade > 1 && idade < 14){
                //criança
                img.setAttribute('src', './photos_id/crianca_M.png')
            }
            else if (idade < 25){
                //jovem  
                img.setAttribute('src', './photos_id/adolescente_M.png')
            }
            else if (idade < 50){
                //adulto  
                img.setAttribute('src', './photos_id/jovem_M.png')

            }else{
                //idoso
                img.setAttribute('src', './photos_id/velho.png')
            }


        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade > 1 && idade < 14){
                img.setAttribute('src', './photos_id/criançaF.png')

            }
            else if (idade < 25){
                //jovem 
                img.setAttribute('src', './photos_id/adolescente_F.png') 
            }
            else if (idade < 50){
                //adulto 
                img.setAttribute('src', './photos_id/jovem_F.png') 
            }else{
                //idoso
                img.setAttribute('src', './photos_id/velha.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}