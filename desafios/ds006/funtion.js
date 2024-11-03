function contTemp() {

    let celsius = window.prompt("Digite uma temperatura em ºC (Celsius)")
    let kelvin = [1 * celsius + 273]
    let fahrenheit = [1.8 * celsius + 32]
    let res = window.document.getElementById("resultado")
    res.innerHTML=`<p> <strong> A temperatura de ${celsius}, corresponde a...</strong> </p> <p>${kelvin} ºK (Kelvin)</p> <p>${fahrenheit} ºF (Fahrenheit)</p>`

}
