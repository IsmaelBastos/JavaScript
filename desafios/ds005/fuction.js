function converter(){
    let medida = window.prompt("Digite uma distância em metros (m)")
    let km = (1 * medida)/1000
    let hm = (1*medida)/100
    let dam = (1*medida)/10
    //////////////////////////////
    let dm = (10 * medida)/1
    let cm = (100 * medida)/1
    let mm = (1000 * medida) /1
    res = window.document.getElementById('resultado')
    res.innerHTML=`<p><strong> A distânciaa de ${medida} metros, corresponde a...</strong>
</p> ${km} Quilômetros</p> <p>${hm} Hectômetros</p> <p>${dam} Dacâmetros</p> <p>${dm} Decímetros</p> <p>${cm} Centímetros</p> <p>${mm} Milímetros</p>`


}
