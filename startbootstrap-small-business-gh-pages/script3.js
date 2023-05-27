document.getElementById("formVendas").addEventListener("submit", function() {
    event.preventDefault();

    // Lendo os valores dos produtos
    var valorProduto1 = parseFloat(document.getElementById("valorProduto1").value);
    var quantidadeProduto1 = parseInt(document.getElementById("quantidadeProduto1").value);
    var valorProduto2 = parseFloat(document.getElementById("valorProduto2").value);
    var quantidadeProduto2 = parseInt(document.getElementById("quantidadeProduto2").value);
    var valorProduto3 = parseFloat(document.getElementById("valorProduto3").value);
    var quantidadeProduto3 = parseInt(document.getElementById("quantidadeProduto3").value);

    // Calculando o valor total de venda
    var totalVenda = (valorProduto1 * quantidadeProduto1) + (valorProduto2 * quantidadeProduto2) + (valorProduto3 * quantidadeProduto3);

    // Exibindo o valor total de venda
    document.getElementById("totalVenda").textContent = "Total de Venda: R$" + totalVenda.toFixed(2);});