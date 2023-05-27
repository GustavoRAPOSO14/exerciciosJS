function calcularIMC () {
    event.preventDefault()
    var sexo = document.getElementById('sexo').value
    var altura = parseFloat(document.getElementById('altura').value)

    if (sexo == 'Mulher') {
         var imc = (62.1 * altura) - 44.7
         document.getElementById('imcIdeal').innerHTML = imc.toFixed(2) + "kg"
    }
    else {
        var imc = (72.7 * altura) - 58
        document.getElementById('imcIdeal').innerHTML = imc.toFixed(2) + "kg"
    }
}