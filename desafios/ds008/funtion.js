function desconto(){

    let produto = window.prompt("Qual produto você está comprando ?")
    let preco = window.prompt(`Qual é o preço do ${produto}`)
    let dez = (preco * 10) / 100
    let desconto = preco - dez
    let res = window.document.getElementById("resultado")
    res.innerHTML = `<p><strong>Calculando desconto de 10 % para ${produto}</strong></p> <p>O preço original era ${preco} kz</p> <p>Você acaba de ganhar ${dez} kz de desconto (-10%)</p> <p> No fim, você vai pagar ${desconto} kz no produto ${produto}</p>`

}
