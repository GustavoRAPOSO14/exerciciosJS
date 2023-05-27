function paraCelsius (valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32)
}
var z = " "
var x = parseInt(prompt("Digite uma temperatura em fahrenheits:"))
document.getElementById('grausFa').innerHTML = x
var total = paraCelsius(x)
document.getElementById('temp').innerHTML =  `: ${total.toFixed(2)} `


function paraFahrenheit (valorCelsius) {
return valorCelsius * 1.8 + 32
}

var y = parseInt(prompt("Digite um temperatura em graus celsius:"))
document.getElementById('grausCe').innerHTML = y
var total2 = paraFahrenheit(y)
document.getElementById('temp2').innerHTML =   `: ${total2.toFixed(2)} `