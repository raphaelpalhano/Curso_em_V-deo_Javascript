function verificar(){
    let Txtvelocidade = window.document.getElementById('vel')
    let velocidade = Number(Txtvelocidade.value)
    let limite = velocidade - 60
    let res = window.document.querySelector('div#result')
    alert("Verificando a velocidade...")
    let medidor = ['leves', 'graves', 'gravíssima']
    let verificador = ''
    if (velocidade > 140){
        verificador = medidor[2]

    }
    else if ( velocidade >= 100){
        verificador = medidor[1]
    }else{
        verificador = medidor[0]
    }


    if (verificador == 'leves'){
        let valor = 88.38
        let multa =  valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        res.innerHTML = `Você estáva correndo a ${velocidade}KM/H e ultrapassou ${limite}km do limite. Sua multa será de ${multa}`

    }
    else if (verificador == 'graves'){
        alert("Verificando a velocidade...")
        let vale = 195.23
        let multado = vale.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        res.innerHTML = `Você estáva correndo a ${velocidade}KM/H e ultrapassou ${limite}km do limite. Sua multa será de ${multado}`
    }
    else if (verificador == 'gravíssima'){
        alert("Verificando a velocidade...")
        let vale = 293.47
        let multado = vale.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        res.innerHTML = `Você estáva correndo a ${velocidade}KM/H e ultrapassou ${limite}km do limite. Sua multa será de ${multado}`
    }
    else{
        alert("Verificando a velocidade...")
        window.document.write("Você está dentro do limite de velocidade.")
    }

}