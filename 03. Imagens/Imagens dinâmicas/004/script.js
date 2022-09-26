function calcular() {

    let dinheiro = document.querySelector ('input#dinheiro')
    let resposta = document.querySelector ('div#resposta')

    let real = Number(dinheiro.value)
    let dolar = real / 5.28

    real = real.toLocaleString ('pt-BR',{style: 'currency', currency: 'BRL'})
    dolar = dolar.toLocaleString ('en',{style: 'currency', currency: 'USD'})

    resposta.innerHTML = `${real}`
    resposta.innerHTML += `<br>${dolar.replace('.',',')}`

}