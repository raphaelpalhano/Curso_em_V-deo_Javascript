function contar(){
    // get elements
    let nuini = document.getElementById('nutxt')
    let nufim = document.getElementById('numb_final')
    let nupasso = document.getElementById('nu_passos')
    let nutext = document.getElementById('text')
    if (nuini.value.length == 0 || nufim.value.length == 0 || nupasso.value.length == 0){
        window.alert('[ERROR] Você não preencheu algum campo!')
        nutext.innerHTML = ` Impossível contar`.bold()

    }else{
        // convert 
        nutext.innerHTML = 'Contando: '
        let inicio = Number(nuini.value)
        let fim = Number(nufim.value)
        let passo = Number(nupasso.value)
        //contagem crescente
        if (passo == 0){
            passo++
        }
        if (inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                nutext.innerHTML += ` ${c} \u{1F449}`
            }
        //contagem decrescente
        }else{
            for(let c = inicio; c >= fim; c -= passo){
                nutext.innerHTML += ` ${c} \u{1F449}`
            }

        }
        nutext.innerHTML += `\u{1f3c1}`

    }
}