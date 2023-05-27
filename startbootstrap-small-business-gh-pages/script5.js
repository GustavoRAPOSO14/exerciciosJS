function calcularPiso () {
    event.preventDefault()

    var comprimento = parseFloat(document.getElementById('comprimento').value)
    var largura = parseFloat(document.getElementById('largura').value)
    var preco = 36

    var metro = largura * comprimento
    var custo = metro * preco
    document.getElementById('custoPiso').innerHTML = "O custo total é de: R$" + custo.toFixed(2)

}