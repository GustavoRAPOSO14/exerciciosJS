function calcularGasto () {
    event.preventDefault()
    var distancia = parseFloat(document.getElementById('quilometragem').value)
    var preço = parseFloat(document.getElementById('combustivel').value)
    var consumo = 8

    var litrosConsumidos = distancia / consumo
    var valorTotal = litrosConsumidos * preço

    document.getElementById('totalGasto').innerHTML = "Gasto total: R$" + valorTotal.toFixed(2)
}
    
