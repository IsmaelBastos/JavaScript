function comprar(){

    let produto = window.prompt("Que produto você está comprando ?")
    let preco = window.prompt(`Quanto custa ${produto} que você está comprando ? `)
    let valor = window.prompt(`Qual foi o valor que deu para pagar ${produto} ? `)

     let troco = valor - preco

     troco = window.alert(`Você comprou ${produto} que custou ${preco} kz \nDeu ${valor} kz, em dinheiro e vai receber ${troco} kz de troco.\nVolte sempre!`)

}
