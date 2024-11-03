function delta(){
    let a = window.prompt("Qual é o valor de a ?")
    let b = window.prompt("Qual é o valor de b ?")
    let c = window.prompt("Qual é o valor de c ?")
    let delta = [(b**2) - (4 * a * c)]
    let res = window.document.getElementById("resultado")
    res.innerHTML = `<p><strong>Resolvendo Bhaskara</strong></p> <p>A equação actual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0 </strong></p> <p> O calculo realizado será <strong>Delta = ${b}<sup>2</sup> - 4 . ${a}  . ${c} = 0</strong></p> <p>O valor calculado foi <strong> Delta = ${delta}</strong></p>`
}
