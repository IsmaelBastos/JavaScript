function verificar(){
    let ano = window.prompt("Qual é o ano que você quer vrificar ?")
    let res = window.document.getElementById("resultado")
    if( ano < 0){

        alert('Digite um ano válido')
        window.prompt('Qual é 0 ano que você quer verificar ?')
    }
    else if((ano % 4 == 0) && (ano != 100) || (ano % 400 == 0)){
        res.innerHTML = `<p><strong>Analizando o ano de ${ano}...</strong></p> <p>O ano de ${ano} <span style="background-color: green; color: darkgreen; padding: 5px; display: inline-block; font-weight: bold;"> É BISSEXTO</span><img src = "yes.png" alt= "yes" style ="position: relative; top: 15px;"></p>`

    }else {

                res.innerHTML = `<p><strong>Analizando o ano de ${ano}...</strong></p> <p>O ano de ${ano} <span style="background-color: red; color: darkred; padding: 5px; display: inline-block; font-weight: bold;" > NÃO É BISSEXTO</span><img src = "X.png" alt= "X" width="32" style ="position: relative; top: 10px;"></p>`

    }
}
