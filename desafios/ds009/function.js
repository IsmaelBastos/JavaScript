function reajustar(){
    let nome = window.prompt("Qual é o nome do funcionário ?")
    let salario = window.prompt(`Qual é o salário de ${nome}`)
    let porcentagem = window.prompt (`O salário de ${nome} vai ser reajustado em qual porcentagem ?`)
    let aumento = (salario * porcentagem) / 100
    let reajuste = 1 * salario + aumento
    let res = window.document.getElementById("resultado")
    res.innerHTML =`<p><strong>${nome} recebeu um amento salarial ! </strong></p> <p> O salário actual era ${salario} kz </p> <p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento} kz no proximo mês.</p> <p>E a partir daí, ${nome} vai passar a ganhar ${reajuste} kz.</p>`
}
